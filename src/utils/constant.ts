/**
 * Keep track of the common parameters for an endpoint.
 */

export const BASE_URL: string = 'https://docsndata-zapier.herokuapp.com/v1/';

export enum Endpoint {
    Auth = 'auth',
    Models = 'model',
    Schema = 'schema',
}