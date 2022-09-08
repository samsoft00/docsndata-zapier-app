"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
// re-construct inputData
const constructPayloadFromInput = (input, z) => {
    const { projectId, ...data } = input;
    return data;
};
// You can optionally add add the shape of the inputData in bundle, which will pass that
// info down into the function and tests
const createRecord = async (z, bundle) => {
    const modelURL = new URL(`${utils_1.BASE_URL}/model/${bundle.inputData.projectId}/record`);
    const response = await z.request({
        method: 'PUT',
        url: modelURL.toString(),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(constructPayloadFromInput(bundle.inputData, z))
    });
    return response.data;
};
exports.default = {
    key: 'createRecord',
    noun: 'Create or Update New Record',
    display: {
        label: 'Create or Update New Record',
        description: 'Create a new record or update an existing record (by ID).',
    },
    operation: {
        perform: createRecord,
        inputFields: [
            // load all models from the API and add them as options to the dropdown
            {
                key: 'projectId',
                required: true,
                label: 'Project',
                dynamic: 'project.id.name',
                altersDynamicFields: true,
                helpText: 'Select a project to create a record in.',
            },
            async function (z, bundle) {
                if (('projectId' in bundle.inputData) && bundle.inputData.projectId !== '') {
                    const schemaURL = new URL(`${utils_1.BASE_URL}/model/${bundle.inputData.projectId}/schema`);
                    const response = await z.request({
                        method: 'GET',
                        url: schemaURL.toString(),
                    });
                    const payload = response.data.data;
                    const schemas = payload.map((n) => ({
                        key: n.key,
                        label: n.label,
                        ...(n.type && { type: n.type.toLowerCase() }),
                        ...(n.required && { required: n.required }),
                        ...(n.unique && { required: true, helpText: `${n.label} field must be unique.` }),
                    }));
                    return schemas;
                }
                return [];
            }
        ],
        sample: utils_1.MODEL_SAMPLE,
    },
};
