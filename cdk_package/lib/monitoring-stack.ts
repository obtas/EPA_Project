import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
// import * lambda from 'aws-cdk-lib/aws-lambda';
// import * apigateway from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { title } from 'process';

export class MonitoringStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // const referenceStack = cdk.StackRe
        const dashboard = new cw.Dashboard(this, 'QwizGuruDashboard', {
            dashboardName: 'QwizGuru Dashboard',
        });

        const accountid = '522253859401'

        const putlambdaInvocations = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/Lambda',
            metricName: 'Invocations',
            dimensionsMap: {
                FunctionName: 'putLambda'
            },
            label: 'put invocations',
            account: accountid
        })

        const getlambdaInvocations = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/Lambda',
            metricName: 'Invocations',
            dimensionsMap: {
                FunctionName: 'getLambda'
            },
            label: 'get invocations',
            account: accountid
        })

        const putlambdaDuration = new cw.Metric({
            statistic: 'min',
            namespace: 'AWS/Lambda',
            metricName: 'Duration',
            dimensionsMap: {
                FunctionName: 'putLambda'
            },
            label: 'put duration',
            account: accountid
        })

        const getlambdaDuration = new cw.Metric({
            statistic: 'min',
            namespace: 'AWS/Lambda',
            metricName: 'Duration',
            dimensionsMap: {
                FunctionName: 'getLambda'
            },
            label: 'get duration',
            account: accountid
        })

        const putlambdaErrors = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/Lambda',
            metricName: 'Errors',
            dimensionsMap: {
                FunctionName: 'putLambda'
            },
            label: 'put errors',
            account: accountid
        })

        const getlambdaErrors = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/Lambda',
            metricName: 'Errors',
            dimensionsMap: {
                FunctionName: 'getLambda'
            },
            label: 'get errors',
            account: accountid
        })

        const DDBUserErrors = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/DynamoDB',
            metricName: 'User Errors',
            label: 'DDB user errors',
            account: accountid
        })

        const DDBSystemErrors = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/DynamoDB',
            metricName: 'System Errors',
            label: 'DDB system errors',
            account: accountid
        })

        const API4XXError = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/APIGateway',
            metricName: '4XX Errors',
            label: 'api 4XX errors',
            account: accountid
        })

        const API5XXError = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/APIGateway',
            metricName: '5XX Errors',
            label: 'api 5XX errors',
            account: accountid
        })

        const APICount = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/APIGateway',
            metricName: 'Count',
            label: 'api count',
            account: accountid
        })

        const invocations = new cw.GraphWidget({
            title: 'Lambda Invocations',
            height: 8,
            width: 12,
        })

        invocations.addLeftMetric(putlambdaInvocations)
        invocations.addRightMetric(getlambdaInvocations)

        const duration = new cw.GraphWidget({
            title: 'Lambda Invocations',
            height: 8,
            width: 12,
        })

        duration.addLeftMetric(putlambdaDuration)
        duration.addRightMetric(getlambdaDuration)

        const errors = new cw.GraphWidget({
            title: 'Lambda Invocations',
            height: 8,
            width: 12,
        })

        errors.addLeftMetric(putlambdaErrors)
        errors.addRightMetric(getlambdaErrors)

        const ddb = new cw.GraphWidget({
            title: 'DynamoDB',
            height: 8,
            width: 12,
        })

        ddb.addLeftMetric(DDBSystemErrors)
        ddb.addRightMetric(DDBUserErrors)

        const api4XXwidget = new cw.GraphWidget({
            title: 'API 4XX Errors',
            width: 12,
            left: [API4XXError]
        })

        const api5XXwidget = new cw.GraphWidget({
            title: 'API 5XX Errors',
            width: 12,
            left: [API5XXError]
        })

        const apiCountWidget = new cw.GraphWidget({
            title: 'API 4XX Errors',
            width: 12,
            left: [APICount]
        })

        dashboard.addWidgets(
            invocations, 
            duration, 
            errors,
            ddb,
            api4XXwidget,
            api5XXwidget,
            apiCountWidget
            )

    };
}