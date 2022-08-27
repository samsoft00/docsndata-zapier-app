"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const getModels = async (z, bundle) => {
    const response = await z.request(`${utils_1.BASE_URL}/model`);
    const { data } = response.data;
    return Object.keys(data).map(k => ({ id: data[k].id, name: data[k].name }));
};
exports.default = {
    key: 'project',
    noun: 'Project',
    display: {
        label: 'New Project',
        description: 'Triggers when a new project is added.',
        hidden: true,
    },
    operation: {
        perform: getModels,
        sample: {
            id: '1',
            name: 'Customer',
        },
    },
};
