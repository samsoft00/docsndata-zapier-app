"use strict";
/**
 * Keep track of the common parameters for an endpoint.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.BASE_URL = void 0;
const NGROK_URL = 'https://a3e0-102-89-33-130.ngrok.io'; // local test
const FIREBASE_URL = 'https://europe-west2-docs-n-data.cloudfunctions.net/zapierConnector';
exports.BASE_URL = `${FIREBASE_URL}/api/v1`;
var Endpoint;
(function (Endpoint) {
    Endpoint["Auth"] = "auth";
    Endpoint["Models"] = "model";
    Endpoint["Schema"] = "schema";
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
