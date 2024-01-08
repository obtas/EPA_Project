// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { GetCommand } from "@aws-sdk/lib-dynamodb";
// import { mockClient } from "aws-sdk-client-mock"
// import { handler } from "../fixtures/get_index.mjs";


const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { GetCommand } = require("@aws-sdk/lib-dynamodb");
const { mockClient } = require("aws-sdk-client-mock");
const { handler } = require("../fixtures/get_index.mjs");

const ddbMock = mockClient(DynamoDBClient);

// resets mock before each test
beforeEach(() => {
  ddbMock.reset();
});

it ("should get an interview question into the DynamoDB", async () => { 
  ddbMock.on(GetCommand).resolves({
    Item: {
      'level':'TEST LEVEL',
      'job_role':'TEST ROLE',
      'question_type' : 'TEST QUESTION TYPE',
      'question': 'TEST QUESTION',
      'answer': 'TEST ANSWER',
    },
  });
  const questions = await handler();
  expect(questions).toBe([{
    'level':'TEST LEVEL',
    'job_role':'TEST ROLE',
    'question_type' : 'TEST QUESTION TYPE',
    'question': 'TEST QUESTION',
    'answer': 'TEST ANSWER',
  }])
});


