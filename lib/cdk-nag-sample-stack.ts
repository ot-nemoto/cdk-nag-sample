import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';

export class CdkNagSampleStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // // The local scope 'this' is the Stack.
        // NagSuppressions.addStackSuppressions(this, [
        //     {
        //         id: 'AwsSolutions-S1',
        //         reason: 'Demonstrate a stack level suppression.',
        //     },
        // ]);
        // // Remediating AwsSolutions-S10 by enforcing SSL on the bucket.
        // const bucket = new Bucket(this, 'Bucket', { enforceSSL: true });
        const bucket = new Bucket(this, 'Bucket');
    }
}
