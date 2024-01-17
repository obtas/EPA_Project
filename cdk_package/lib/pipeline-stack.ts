import { Construct } from 'constructs';
// import { ServiceStage } from './pipeline-stage';
import { DevStage } from './pipeline-dev-stage';
import { ProdStage } from "./pipeline-prod-stage";
import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { CdkPackageStack } from './cdk_package-stack';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';

export class QwizPipelineStack extends cdk.Stack {
    public readonly cloudfrontAddress: cdk.CfnOutput; 

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Use pre-exisitng CodeCommit repository
        const repo = codecommit.Repository.fromRepositoryName(this, 'QwizGuruRepo', "QwizGuruPlatform");

        const source = CodePipelineSource.codeCommit(repo, 'master')

        const pipeline = new CodePipeline(this, 'QwizPipeline-samilafo', {
            pipelineName: 'QwizPipeline-samilafo',
            crossAccountKeys: true,
            synth: new CodeBuildStep('SynthStep', {
                input: source,
                installCommands: [
                    'npm install -g aws-cdk',
                    'npm install -g typescript',
                ],
                commands: [
                    'cdk --version',
                    'tsc --version',
                    'pwd',
                    'cd cdk_package',
                    'ls',
                    'npm install',
                    'npm run build',
                    'cdk synth',
                    'ls -al'
                ],
                primaryOutputDirectory: 'cdk_package/cdk.out',
            })
        });

        const dev_stage = pipeline.addStage(new DevStage(this, "Dev", {
            env: { account: '937836275043', region: 'us-west-2'}
        }));

        dev_stage.addPre(new ShellStep("ValidationAndUnitTests", {
            input: source,
            commands: ['npm run test']
        }))

        dev_stage.addPost(new ShellStep('TestEndpoint', {
            commands: [
                'curl -Ssf https://dev.qwizguru.samilafo.people.aws.dev/',
                'curl -Ssf https://dev-samilafo-qwiz-api.samilafo.people.aws.dev/question',
            ]
        }))
        const prod_stage = pipeline.addStage(new ProdStage(this, "Prod", {
            env: { account: '522253859401', region: 'us-west-2'}
        }));

        prod_stage.addPre(new ShellStep("ValidationAndUnitTests", {
            input: source,
            commands: ['npm run test']
        }))

        prod_stage.addPost(new ShellStep('TestEndpoint', {
            commands: [
                'curl -Ssf https://qwizguru.samilafo.people.aws.dev/',
                'curl -Ssf https://samilafo-qwiz-api.samilafo.people.aws.dev/question',
            ]
        }))
    }
}