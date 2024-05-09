#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkNagSampleStack } from '../lib/cdk-nag-sample-stack';
import { AwsSolutionsChecks } from 'cdk-nag';
import { Aspects } from 'aws-cdk-lib';

const app = new cdk.App();

// Add the cdk-nag AwsSolutions Pack with extra verbose logging enabled.
Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

new CdkNagSampleStack(app, 'CdkNagSampleStack', {});
