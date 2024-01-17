import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = 'DEV_qwizgurus_interview_table_uswest2';

// @ts-nocheck 
export const handler = async (event: any) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': "https://qwizguru.samilafo.people.aws.dev",
    'Access-Control-Allow-Methods': "OPTIONS, GET, POST , PUT, DELETE",
    'Access-Control-Allow-Headers': "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent"
  };
  console.log(event)

  try {
    switch(event.requestContext.httpMethod) {
        case "PUT":
            let requestJSON = JSON.parse(event.body);
            await dynamo.send(
              new PutCommand({
                TableName: tableName,
                Item: {
                  level: requestJSON.level,
                  question: requestJSON.question,
                  job_role: requestJSON.job_role,
                  question_type: requestJSON.question_type,
                  answer: requestJSON.answer,
                },
              })
            );
            body = `Put item ${requestJSON.question}`;
            break;
          default:
            throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
  } catch (err: any) {
    statusCode = 400;
    // @ts-nocheck 
    body = err.message;
    console.log(body)
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};