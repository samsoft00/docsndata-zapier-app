/**
 * Keep track of the common parameters for an endpoint.
 */ 

type BaseURL = string;

const NGROK_URL: BaseURL = 'https://d93b-102-89-40-123.ngrok.io'; // local test
const HEROKU_URL: BaseURL = 'https://docsndata-zapier.herokuapp.com';

export const BASE_URL: string = `${HEROKU_URL}/api/v1`;

export enum Endpoint {
    Auth = 'auth',
    Models = 'model',
    Schema = 'schema',
}