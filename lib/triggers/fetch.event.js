"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const getModelEvents = async (z, bundle) => {
    const response = await z.request(`${utils_1.BASE_URL}/model/${bundle.inputData.project_id}/events`);
    const { data } = response.data;
    return Object.keys(data).map(k => ({
        id: data[k].id,
        name: data[k].name,
        description: data[k].description
    }));
};
exports.default = {
    key: 'event',
    noun: 'Event',
    display: {
        label: 'New Event',
        description: 'Triggers when project (model) is selected.',
        hidden: true,
    },
    operation: {
        perform: getModelEvents,
        sample: {
            id: '360c82a543ed8b97b2dea740f22f775a',
            name: 'New Customer',
            discription: 'Triggers when a new record is created. Optionally: triggers when any record (new or existing) is first added.',
        },
    },
};
