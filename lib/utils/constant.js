"use strict";
/**
 * Keep track of the common parameters for an endpoint.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.BASE_URL = void 0;
const NGROK_URL = 'https://d93b-102-89-40-123.ngrok.io'; // local test
const HEROKU_URL = 'https://docsndata-zapier.herokuapp.com';
exports.BASE_URL = `${NGROK_URL}/api/v1`;
var Endpoint;
(function (Endpoint) {
    Endpoint["Auth"] = "auth";
    Endpoint["Models"] = "model";
    Endpoint["Schema"] = "schema";
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
