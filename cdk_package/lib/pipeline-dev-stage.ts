import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { DevCdkPackageStack } from './dev_cdk_package-stack';
import { DevMonitoringStack } from './dev-monitoring-stack';

export class DevStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const DevCdkStack = new DevCdkPackageStack(this, 'DevCdkStack');

        const DevMonitorStack = new DevMonitoringStack(this, 'DevMonitoringStack')
    }
}