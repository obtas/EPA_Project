import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { mockClient } from "aws-sdk-client-mock"

const ddbMock = mockClient(DynamoDBClient);

// resets mock before each test
beforeEach(() => {
  ddbMock.reset();
});

it ("should put an interview question into the DynamoDB", async () => { ddbMock.on(PutCommand).resolves({
  Item: {
    'level':'TEST LEVEL',
    'job_role':'TEST ROLE',
    'question_type' : 'TEST QUESTION TYPE',
    'question': 'TEST QUESTION',
    'answer': 'TEST ANSWER',
    },
});

})

