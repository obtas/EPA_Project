import { mockClient } from "aws-sdk-client-mock";
import { DynamoDBDocumentClient, ScanCommand, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { handler } from "../../cdk_package/lib/lambdaHandler/get_index"

const ddbMock = mockClient(DynamoDBDocumentClient);

const question = [{
    question: "BEEP_TEST_QUESTION",
    level: "fourth",
    job_role: "fourth",
    question_type: "BLAH",
    answer: "BLAH"
  }]

const malformed_question = {}

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': "https://qwizguru.samilafo.people.aws.dev",
    'Access-Control-Allow-Methods': "OPTIONS, GET, POST , PUT, DELETE",
    'Access-Control-Allow-Headers': "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent"
  };

const event = {
    "requestContext": {
        "httpMethod": "GET"
    }
}

beforeEach(() => {
    ddbMock.reset();
  });

it ("shouldn't retrieve all questions from the DynamoDB", async () => {
    ddbMock.on(ScanCommand).resolves({
        Item: malformed_question
    });

    // {body: '', requestContext: {HttpMethod: "GET"}}
    const response = await handler(event)

    expect(response.headers).toStrictEqual(headers)
    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(undefined)
})


it ("should return items from dynamoDB", async () => {
    ddbMock.on(ScanCommand).resolves({
        Items: question
    })

    const response = await handler(event)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(JSON.stringify(question))
    expect(response.headers).toStrictEqual(headers)
}) 