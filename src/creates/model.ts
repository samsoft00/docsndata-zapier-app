import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL, MODEL_SAMPLE } from '../utils';

  type AnyObject = {[x: string]: any;}

  // re-construct inputData
  const constructPayloadFromInput = (input: AnyObject, z: ZObject) => {
    return input
  }

// You can optionally add add the shape of the inputData in bundle, which will pass that
// info down into the function and tests
const createRecord = async (
  z: ZObject,
  bundle: Bundle
) => {
  const modelURL = new URL(`${BASE_URL}/model/${bundle.inputData.project_id}/record`);
  const response = await z.request({
    method: 'PUT',
    url: modelURL.toString(),
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(constructPayloadFromInput(bundle.inputData, z))
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
    perform: createRecord,
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
        const schemaURL = new URL(`${BASE_URL}/model/${bundle.inputData.project_id}/schema`);
        const response = await z.request({
          method: 'GET',
          url: schemaURL.toString(),
        });
        return response.data.data;
      }
    ],
    sample: MODEL_SAMPLE,
  },
};
