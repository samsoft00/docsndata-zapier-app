import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL, MODEL_SAMPLE as sample } from '../utils'

const findRecord = async (z: ZObject, bundle: Bundle) => {
  // main endpoint -> fine record that is related to project_id (modelID) && event_id (eventID)
  const {
    project_id: projectID, 
    event_id: eventID
  } = bundle.inputData;

  const recordURL = new URL(`${BASE_URL}/model/${projectID}/event/${eventID}/records`);
  const response = await z.request({
    method: 'GET',
    url: recordURL.toString(),
    headers: { 'Content-Type': 'application/json' }
  });
  
  return response.data.data;
};

export default {
  key: 'modelEvent',
  noun: 'Model Event',

  display: {
    label: 'Model Event',
    description: 'When event you have configure for a model is triggered.',
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
        dynamic: 'event.id.name', //come back to this later
        // altersDynamicFields: true,
        helpText: 'Select event to run for the base model',
      }
    ],
    perform: findRecord,
    sample,
  },
};