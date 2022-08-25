import { Bundle, ZObject } from 'zapier-platform-core';
import { 
  BASE_URL, 
  Endpoint, 
  MODEL_PROPERTY_SCHEMA,
  MODEL_SAMPLE } from '../utils';

// You can optionally add add the shape of the inputData in bundle, which will pass that
// info down into the function and tests
const perform = async (
  z: ZObject,
  bundle: Bundle<{ project_id: string }>
) => {
  const modelURL = new URL([bundle.inputData.project_id, Endpoint.Models].join('/'), BASE_URL)

  const response = await z.request({
    method: 'POST',
    url: modelURL.toString(),
  });
  return response.data;
};

export default {
  key: 'createRecord',
  noun: 'Create or Update New Record',

  display: {
    label: 'Create or Update New Record',
    description: 'Create a new record or update an existing record (by ID).',
  },

  operation: {
    perform,
    inputFields: [
      // load all models from the API and add them as options to the dropdown
      {
        key: 'project_id',
        required: true,
        label: 'Project',
        dynamic: 'project.id.name',
        altersDynamicFields: true,
        helpText: 'Select a project to create a record in.',
      },
      async function (z: ZObject, bundle: Bundle) {
        /*
        const schemaURL = new URL([bundle.inputData.project_id, Endpoint.Schema].join('/'), BASE_URL)

        const response = await z.request({
          method: 'GET',
          url: schemaURL.toString(),
        });
        return response.data;
      */

        return Promise.resolve(MODEL_PROPERTY_SCHEMA)
      }
    ],
    sample: MODEL_SAMPLE,
  },
};
