import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

// import { marshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "qwizgurus_interview_table_uswest2";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': ["https://qwizguru.samilafo.people.aws.dev", "http://localhost:8081/"],
    'Access-Control-Allow-Methods': "OPTIONS, GET, POST , PUT, DELETE",
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
    'Access-Control-Allow-Credentials': 'true',
  };
  console.log(event)
  
  // switch(event.routeKey)
  // switch (event.requestContext.httpMethod)

  try {
    switch(event.requestContext.httpMethod) {
      case "GET":
          console.log('its a GET method');
          body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        body = body.Items;
          break;
      default:
        throw new Error(`Unsupported route: "${event.requestContext.httpMethod}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};