import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as cw_actions from 'aws-cdk-lib/aws-cloudwatch-actions';

export class DevMonitoringStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const dashboard = new cw.Dashboard(this, 'DevQwizGuruDashboard', {
            dashboardName: 'DevQwizGuruDashboard',
        });

        const accountid = '937836275043'


        const email = "samilafo@amazon.co.uk"

        const topic = new sns.Topic(this, "AlarmTopics")
        
        const subscription = new sns.Subscription(this, 'AlarmSubscription', {
            topic,
            endpoint: email,
            protocol: sns.SubscriptionProtocol.EMAIL,

        })

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

        const putErrorsAlarm = new cw.Alarm(this, 'put-errors-alarm', {
            metric: putlambdaInvocations,
            threshold: 2,
            evaluationPeriods: 2,
            comparisonOperator: cw.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD
          });
        
        putErrorsAlarm.addAlarmAction(new cw_actions.SnsAction(topic))

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

        const getErrorsAlarm = new cw.Alarm(this, 'get-errors-alarm', {
            metric: putlambdaInvocations,
            threshold: 2,
            evaluationPeriods: 2,
            comparisonOperator: cw.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD
          });
        
        getErrorsAlarm.addAlarmAction(new cw_actions.SnsAction(topic))

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

        const api4xxErrorsAlarm = new cw.Alarm(this, 'api4xx-errors-alarm', {
            metric: API4XXError,
            threshold: 2,
            evaluationPeriods: 2,
            comparisonOperator: cw.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD
          });
        
        api4xxErrorsAlarm.addAlarmAction(new cw_actions.SnsAction(topic))


        const API5XXError = new cw.Metric({
            statistic: 'sum',
            namespace: 'AWS/APIGateway',
            metricName: '5XX Errors',
            label: 'api 5XX errors',
            account: accountid
        })


        const api5xxErrorsAlarm = new cw.Alarm(this, 'api5xx-errors-alarm', {
            metric: API5XXError,
            threshold: 2,
            evaluationPeriods: 2,
            comparisonOperator: cw.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD
          });
        
        api5xxErrorsAlarm.addAlarmAction(new cw_actions.SnsAction(topic))

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
            title: 'Lambda Duration',
            height: 8,
            width: 12,
        })

        duration.addLeftMetric(putlambdaDuration)
        duration.addRightMetric(getlambdaDuration)

        const errors = new cw.GraphWidget({
            title: 'Lambda Errors',
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