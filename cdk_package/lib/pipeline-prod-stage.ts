import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { CdkPackageStack } from './cdk_package-stack';
import { MonitoringStack } from './monitoring-stack';

export class ProdStage extends cdk.Stage {
    // public readonly cloudfrontAddress: cdk.CfnOutput;

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const cdkStack = new CdkPackageStack(this, 'cdkStack');

        // this.cloudfrontAddress = cdkStack.cloudfrontAddress

        const monitoringStack = new MonitoringStack(this, 'monitoringStack');
    }
}