/**
 * Keep track of the common parameters for an endpoint.
 */ 

type BaseURL = string;

const NGROK_URL: BaseURL = 'https://a3e0-102-89-33-130.ngrok.io'; // local test
const HEROKU_URL: BaseURL = 'https://docsndata-zapier.herokuapp.com';
const  FIREBASE_URL: BaseURL = 'https://europe-west2-docs-n-data.cloudfunctions.net/zapierConnector';

export const BASE_URL: string = `${FIREBASE_URL}/api/v1`;

export enum Endpoint {
    Auth = 'auth',
    Models = 'model',
    Schema = 'schema',
}