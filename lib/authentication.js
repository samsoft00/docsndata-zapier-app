"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const testAuth = (z, bundle) => {
    const promise = z.request(`${utils_1.BASE_URL}/user`);
    return promise.then(response => {
        if (response.status !== 200) {
            throw new Error('Invalid API Key');
        }
    });
};
const getConnectionLabel = (z, bundle) => {
    return `- ${bundle.authData.username}`;
};
exports.default = {
    type: 'custom',
    test: testAuth,
    connectionLabel: getConnectionLabel,
    fields: [
        {
            key: 'username',
            label: 'Team ID',
            type: 'string',
            required: true,
            helpText: 'Available in Settings -> Account on your DocsnData dashboard'
        },
        {
            key: 'password',
            label: 'Api Key',
            type: 'string',
            required: true,
        }
    ]
};
