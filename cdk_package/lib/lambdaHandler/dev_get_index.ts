import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';

const client = new DynamoDBClient({})

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "DEV_qwizgurus_interview_table_uswest2";

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
      case "GET":
          body = await dynamo.send(
            new ScanCommand({ TableName: tableName })
          );
          body = body.Items;
          break;
      default:
        throw new Error(`Unsupported route: "${event.requestContext.httpMethod}"`);
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