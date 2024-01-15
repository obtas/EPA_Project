import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { CdkPackageStack } from './cdk_package-stack';
import { MonitoringStack } from './monitoring-stack';

export class AlphaStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const cdkStack = new CdkPackageStack(this, 'cdkStack');

        const monitoringStack = new MonitoringStack(this, 'monitoringStack');
    }
}