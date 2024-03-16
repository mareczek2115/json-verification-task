# A method verifying if the `Resource` field contains a single asterisk

## Input data is defined as [AWS::IAM::Role Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-policy.html) JSON
```json
{
    "PolicyName": "root",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "IamListAccess",
                "Effect": "Allow",
                "Action": [
                    "iam:ListRoles",
                    "iam:ListUsers"
                ],
                "Resource": "*"
            }
        ]
    }
}
```

## Run the app
Clone the repo with the `git clone` command. In the project directory, install dependencies with `npm install` and install TypeScript globally with `npm install -g typescript`. Afterward, compile the TypeScript file with `tsc main.ts` and then type `node main.js` to run the function and test the provided JSON. If you want to change the input data, paste your JSON into `json/jsonToVerify.json` and run the `node main.js` command again.

## Unit test
A file with unit tests is also included, with multiple cases of JSON testing. You can run them with the following command: 
### `npm run test`.