"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const testAuth = async (z, bundle) => {
    const request = await z.request(`${utils_1.BASE_URL}/user`);
    if (![200, 201].includes(request.status)) {
        throw new Error('Invalid Team ID or API Key');
    }
    return request.data.data;
};
const getConnectionLabel = (z, bundle) => {
    // extract team information from bundle
    const { team } = bundle.inputData;
    if (team)
        return `${team.name}`;
    return `${bundle.authData.username}`;
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
