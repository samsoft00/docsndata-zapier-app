"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const findRecord = async (z, bundle) => {
    // main endpoint -> fine record that is related to project_id (modelID) && event_id (eventID)
    const { project_id: projectID, event_id: eventID } = bundle.inputData;
    const recordURL = new URL(`${utils_1.BASE_URL}/model/${projectID}/event/${eventID}/records`);
    const response = await z.request({
        method: 'GET',
        url: recordURL.toString(),
        headers: { 'Content-Type': 'application/json' }
    });
    return response.data.data;
};
exports.default = {
    key: 'newRecord',
    noun: 'New Record',
    display: {
        label: 'New Record',
        description: 'Triggers when a new record is created.',
    },
    operation: {
        inputFields: [
            // Select model
            {
                key: 'project_id',
                required: true,
                label: 'Base Model',
                dynamic: 'project.id.name',
                altersDynamicFields: true,
                helpText: 'Select a project to read record from.',
            },
            // Select docsndata models event
            {
                key: 'event_id',
                required: true,
                label: 'Event',
                dynamic: 'event.id.name',
                // altersDynamicFields: true,
                helpText: 'Select event to run for the base model',
            }
        ],
        perform: findRecord,
        sample: utils_1.MODEL_SAMPLE,
    },
};
