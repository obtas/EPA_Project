import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origin from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cloudtrail from 'aws-cdk-lib/aws-cloudtrail'
import * as sns from 'aws-cdk-lib/aws-sns'
import * as logs from 'aws-cdk-lib/aws-logs';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as path from 'path';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as target from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
import { Construct } from 'constructs';
import { Rule } from 'aws-cdk-lib/aws-events';


export class DevCdkPackageStack extends Stack {

    public readonly cloudfrontAddress: cdk.CfnOutput;

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        //  dynamodb table
        const table = new ddb.Table(this, '{DEV_TABLE_NAME}', {
            tableName: '{DEV_TABLE_NAME}',
            partitionKey: {
                name: 'level',
                type: ddb.AttributeType.STRING,
            },
            sortKey: {
                name: 'question',
                type: ddb.AttributeType.STRING
            },
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        table.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY)

        // lambda fetch interview question data
        const getFunction = new lambda.Function(this, 'DEV_GET_Function', {
            functionName: 'DEVgetLambda',
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'dev_get_index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, 'lambdaHandler')),
        });

        if (getFunction.role === null) {
            throw new Error('Lambda function role cannot be null');
        }

        getFunction.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'))

        getFunction.addEnvironment("TABLE_NAME", table.tableName)

        table.grantReadWriteData(getFunction)

        // lambda write interview question data
        const putFunction = new lambda.Function(this, 'DEV_PUT_Function', {
            functionName: 'DEVputLambda',
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'dev_put_index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, 'lambdaHandler')),
        });

        if (putFunction.role === null) {
            throw new Error('Lambda function role cannot be null');
        }

        putFunction.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'))

        putFunction.addEnvironment("TABLE_NAME", table.tableName)

        table.grantReadWriteData(putFunction)

        const bucket = new s3.Bucket(this, '{BUCKET_NAME}', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        });

        bucket.addCorsRule({
            allowedOrigins: ["{DEV_DEPLOYMENT_DOMAIN}", "{DEV_API}"],
            allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.POST],
            allowedHeaders: ["*"],
            exposedHeaders: ["Access-Control-Allow-Origin"]
        })

        const deployment = new s3deploy.BucketDeployment(this, '{DEPLOYMENT_BUCKET}', {
            sources: [s3deploy.Source.asset(path.join(__dirname, '../../DEVcloudscape'))],
            destinationBucket: bucket,
            memoryLimit: 1024,
        });

        const oai = new cloudfront.OriginAccessIdentity(this, 'samilafo-qwizguru-oai');

        bucket.grantRead(oai);

        const logGroup = new logs.LogGroup(this, "DevLogs")

        const api = new apigateway.RestApi(this, 'samilafo-qg-api', {
            restApiName: 'DEVsamilafo-qg-api',
            defaultCorsPreflightOptions: {
                allowOrigins: ["{DEV_DOMAIN_NAME}", "{LOCAL_HOST}"],
                allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
                allowMethods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"]
            },
            cloudWatchRole: true,
            deployOptions: {
                accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
                accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
                    caller: false,
                    httpMethod: true,
                    ip: true,
                    protocol: true,
                    requestTime: true,
                    resourcePath: true,
                    responseLength: true,
                    status: true,
                    user: true,
                  }),
            }
        });

        const putlambdaintegration = new apigateway.LambdaIntegration(putFunction);
        const getlambdaintegration = new apigateway.LambdaIntegration(getFunction);

        // input your own domain name here. 
        const hosted_zone_name = '{HOSTED_ZONE_NAME}'
        const hostedZoneID = '{HOSTED_ZONE_ID}'
        const novaCrossDNSRole = '{NOVACROSS_ROLE_ARN}'

        // constructing the api url with the domain name
        const qwiz_api_zone_name = 'dev-samilafo-qwiz-api.' + hosted_zone_name

        const my_hosted_zone = route53.HostedZone.fromHostedZoneAttributes(this, 'samilafo_qwiz_zone', { 
            hostedZoneId: hostedZoneID,
            zoneName: hosted_zone_name
        });

        // creating a zone for the sub domain for the api
        const api_hosted_subdomain_zone = new route53.PublicHostedZone(this, 'api_subdomain', {
           zoneName: qwiz_api_zone_name,
        });

        const domain_delegation_api = new route53.CrossAccountZoneDelegationRecord(this, 'zoneDelegationAPI', {
            delegatedZone: api_hosted_subdomain_zone,
            parentHostedZoneId: hostedZoneID,
            delegationRole: iam.Role.fromRoleArn(this, "DelegationRoleAPI", novaCrossDNSRole)
        });

        // SSL certificate
        const api_ssl_cert = new acm.Certificate(this, 'CertDist', {
            domainName: qwiz_api_zone_name,
            certificateName: 'DEVqwiz-API-SSL-Cert',
            // hostedZone: api_hosted_subdomain_zone,
            validation: acm.CertificateValidation.fromDns(api_hosted_subdomain_zone)
        });

        // adding the domain name to the api gateway
        api.addDomainName('api_domain', {
           domainName: qwiz_api_zone_name,
           certificate: api_ssl_cert,
        }); 

        // creating text records for security
        // values provided state that no email addresses/IPs are allowed to send emails from this domain
        new route53.TxtRecord(this, 'api_domain_txt_record_spf', {
           zone: api_hosted_subdomain_zone,
           recordName: qwiz_api_zone_name,
           values: ['v=spf1 -all'],
           comment: '#################################'
        });

        // creating text records for security
        // values provided aids the spf records to mitigate spoofing 
        new route53.TxtRecord(this, 'api_domain_txt_record', {
           zone: api_hosted_subdomain_zone,
           recordName: '_dmarc.' + qwiz_api_zone_name,
           values: ['#################################'],
           comment: '#################################'
        });

        // A record and Aaaa record for api
        new route53.ARecord(this, 'APIARecord', {
            zone: api_hosted_subdomain_zone,
            target: route53.RecordTarget.fromAlias(new target.ApiGateway(api)),
            ttl: cdk.Duration.minutes(5)
        });

        new route53.AaaaRecord(this, 'APIAAAARecord', {
            zone: api_hosted_subdomain_zone,
            target: route53.RecordTarget.fromAlias(new target.ApiGateway(api)),
            ttl: cdk.Duration.minutes(5)
        });

        // constructing the distribution url using the parent domain name
        const qwiz_distribution_zone_name = 'dev.qwizguru.' + hosted_zone_name

        // create a zone for the sub domain for the distribution
        const distribution_hosted_sub_zone = new route53.PublicHostedZone(this, 'distribution_sub', {
          zoneName: qwiz_distribution_zone_name
        });

        const domain_delegation_cdn = new route53.CrossAccountZoneDelegationRecord(this, 'zoneDelegationCDN', {
            delegatedZone: distribution_hosted_sub_zone,
            parentHostedZoneId: hostedZoneID,
            delegationRole: iam.Role.fromRoleArn(this, 'DelegationRoleCDN', novaCrossDNSRole)
        });

        // create SSL certificate for cloudfront
        const cloudfront_ssl_cert = new acm.DnsValidatedCertificate(this, 'CFDis_CertDist', {
            domainName: qwiz_distribution_zone_name,
            hostedZone: distribution_hosted_sub_zone,
            region: 'us-east-1',
        });

        const distribution = new cloudfront.Distribution(this, 'dev_samilafo_qwizguru_cloudfront', {
            defaultBehavior: {
                origin: new origin.S3Origin(bucket, {
                    originAccessIdentity: oai,
                    originPath: '/lib'
                }),
                       originRequestPolicy: cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
                       viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                       allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                       responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                       cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
            },
               domainNames: [qwiz_distribution_zone_name],
               certificate: cloudfront_ssl_cert,
               enableIpv6: true,
               defaultRootObject: 'index.html'
        });
        
        this.cloudfrontAddress = new cdk.CfnOutput(this, 'CloudfrontAddress', {
            value: distribution.distributionDomainName
        })

        // creating text records for security
        // values provided state that no email addresses/IPs are allowed to send emails from this domain
        new route53.TxtRecord(this, 'distribution_domain_txt_record_spf', {
           zone: distribution_hosted_sub_zone,
           recordName: qwiz_distribution_zone_name,
           values: ['v=spf1 -all'],
           comment: '#################################'
        });

        // creating text records for security
        // values provided aids the spf records to mitigate spoofing 
        new route53.TxtRecord(this, 'distribution_domain_txt_record', {
           zone: distribution_hosted_sub_zone,
           recordName: '_dmarc.' + qwiz_distribution_zone_name,
           values: ['#################################'],
           comment: '#################################'
        });

        // A records / aaaa records
        new route53.ARecord(this, 'DistributionARecord', {
            zone: distribution_hosted_sub_zone,
            target: route53.RecordTarget.fromAlias(new target.CloudFrontTarget(distribution)),
            ttl: cdk.Duration.minutes(5)
        });

        new route53.AaaaRecord(this, 'DistributionAAAARecord', {
            zone: distribution_hosted_sub_zone,
            target: route53.RecordTarget.fromAlias(new target.CloudFrontTarget(distribution)),
            ttl: cdk.Duration.minutes(5)
        });

        const putresource = api.root.addResource("put-question");
        putresource.addMethod("PUT", putlambdaintegration);

        const getresource = api.root.addResource("question");
        getresource.addMethod("GET", getlambdaintegration);

        // cloudTrail
        const key = new kms.Key(this, 'cloudTrailKey', {
            enableKeyRotation: true,
        });

        key.grantEncrypt(new iam.ServicePrincipal('cloudtrail.amazonaws.com'));

        const topic = new sns.Topic(this, 'QwizEvents')
        const trail = new cloudtrail.Trail(this, 'CloudTrail', {
            snsTopic: topic,
            sendToCloudWatchLogs: true,
            cloudWatchLogsRetention: logs.RetentionDays.FOUR_MONTHS,
            trailName: 'samilafo-Qwiz-Events',
            encryptionKey: key
        });
    };
};



