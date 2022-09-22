"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
const model_1 = require("./creates/model");
const fetch_model_1 = require("./triggers/fetch.model");
const zapier_platform_core_1 = require("zapier-platform-core");
const { version } = require('../package.json');
const addApiKeyToHeader = (req, z, bundle) => {
    // Hard-coded api key just to demo. DON'T do auth like this for your production app!
    const basicHash = Buffer.from(`${bundle.authData.username}:${bundle.authData.password}`).toString('base64');
    req.headers = req.headers || {};
    req.headers['Authorization'] = `Basic ${basicHash}`;
    return req;
};
const handleHTTPError = (resp, z) => {
    var _a;
    if (resp.status >= 400) {
        if ((_a = resp.data) === null || _a === void 0 ? void 0 : _a.error) {
            throw new Error(resp.data.error);
        }
        throw new Error(`Unexpected status code ${resp.status}`);
    }
    return resp;
};
exports.default = {
    version,
    platformVersion: zapier_platform_core_1.version,
    authentication: authentication_1.default,
    // middleware
    beforeRequest: [addApiKeyToHeader],
    afterResponse: [handleHTTPError],
    triggers: {
        [fetch_model_1.default.key]: fetch_model_1.default,
    },
    creates: {
        [model_1.default.key]: model_1.default,
    },
};
