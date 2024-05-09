# cdk-nag-sample

- `cdk-nag` のお試し

## cdk-nag とは

## 実行結果

```sh
npx cdk synth
  # [Error at /CdkNagSampleStack/Bucket/Resource] AwsSolutions-S1: The S3 Bucket has server access logs disabled. The bucket should have server access logging enabled to provide detailed records for the requests that are made to the bucket.
  #
  # [Error at /CdkNagSampleStack/Bucket/Resource] AwsSolutions-S10: The S3 Bucket or bucket policy does not require requests to use SSL. You can use HTTPS (TLS) to help prevent potential attackers from eavesdropping on or manipulating network traffic using person-in-the-middle or similar attacks. You should allow only encrypted connections over HTTPS (TLS) using the aws:SecureTransport condition on Amazon S3 bucket policies.
  #
  #
  # Found errors
```

_cdk.out/AwsSolutions-CdkNagSampleStack-NagReport.csv_

```csv
Rule ID,Resource ID,Compliance,Exception Reason,Rule Level,Rule Info
"AwsSolutions-S1","CdkNagSampleStack/Bucket/Resource","Non-Compliant","N/A","Error","The S3 Bucket has server access logs disabled."
"AwsSolutions-S2","CdkNagSampleStack/Bucket/Resource","Compliant","N/A","Error","The S3 Bucket does not have public access restricted and blocked."
"AwsSolutions-S5","CdkNagSampleStack/Bucket/Resource","Compliant","N/A","Error","The S3 static website bucket either has an open world bucket policy or does not use a CloudFront Origin Access Identity (OAI) in the bucket policy for limited getObject and/or putObject permissions."
"AwsSolutions-S10","CdkNagSampleStack/Bucket/Resource","Non-Compliant","N/A","Error","The S3 Bucket or bucket policy does not require requests to use SSL."
```

## 参考資料

- [AWS Cloud Development Kit と cdk-nag でアプリケーションのセキュリティとコンプライアンスを管理する](https://aws.amazon.com/jp/blogs/news/manage-application-security-and-compliance-with-the-aws-cloud-development-kit-and-cdk-nag/)
