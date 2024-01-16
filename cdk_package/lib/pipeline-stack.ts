import { Construct } from 'constructs';
// import { ServiceStage } from './pipeline-stage';
import { TestStage } from './pipeline-test-stage';
import { AlphaStage } from "./pipeline-alpha-stage";
import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { CdkPackageStack } from './cdk_package-stack';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';

export class QwizPipelineStack extends cdk.Stack {
    public readonly cloudfrontAddress: cdk.CfnOutput; 

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // const constants = {
        //     stages: [
        //         { name: "Alpha", accountId: "522253859401", region: "us-west-2", isProd: false },
        //         { name: "Prod", accountId: "937836275043", region: "us-west-2", isProd: false }
        //     ]
        // }

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

        // constants.stages.map((s) => {
        //     const deployment = new ServiceStage(this, (s.name.toLowerCase() + 'Deployment'), {
        //         env: { account: s.accountId, region: s.region },
        //         stageName: s.isProd ? '' : s.name.toLowerCase(),

        //     });

        //     const stage = pipeline.addStage(deployment)
        // })

        const alpha_stage = pipeline.addStage(new AlphaStage(this, "Alpha", {
            env: { account: '522253859401', region: 'us-west-2'}
        }));

        alpha_stage.addPre(new ShellStep("ValidationTests", {
            input: source,
            commands: ['pwd', 'npm run test']
        }))

        alpha_stage.addPost(new ShellStep('TestEndpoint', {
            commands: [
                'curl -Ssf https://qwizguru.samilafo.people.aws.dev/',
                'curl -Ssf https://samilafo-qwiz-api.samilafo.people.aws.dev/question',
            ]
        }))

        // alpha_stage.addPost(new ShellStep("Outputs", {
        //     envFromCfnOutputs: {cf_addr: cloudfrontAddress},
        //     commands: ['echo $cf_addr']
        // }))

        // const test_stage = pipeline.addStage(new TestStage(this, "Prod", {
        //     env: { account: '937836275043', region: 'us-west-2'}
        // }));
    }
}