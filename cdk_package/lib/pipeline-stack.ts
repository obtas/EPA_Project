import { Construct } from 'constructs';
import { ProdStage } from './pipeline-prod-stage';
import { AlphaStage } from "./pipeline-alpha-stage";
import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";

export class QwizPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Use pre-exisitng CodeCommit repository
        const repo = codecommit.Repository.fromRepositoryName(this, 'QwizGuruRepo', "QwizGuruPlatform");

        const pipeline = new CodePipeline(this, 'QwizPipeline-samilafo', {
            pipelineName: 'QwizPipeline-samilafo',
            crossAccountKeys: true,
            synth: new CodeBuildStep('SynthStep', {
                input: CodePipelineSource.codeCommit(repo, 'master'),
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

        const alpha_stage = pipeline.addStage(new AlphaStage(this, "Beta", {
            env: { account: '522253859401', region: 'us-west-2'}
        }));

        const prod_stage = pipeline.addStage(new ProdStage(this, "Alpha", {
            env: { account: '937836275043', region: 'us-west-2'}
        }));
    }
}