import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL, CUSTOMER_SAMPLE as sample } from '../utils'

const findRecord = async (z: ZObject, bundle: Bundle) => {
  // main endpoint -> fine record that is related to projectId (modelID) && eventId (eventID)
  const {
    projectId: projectID, 
    eventId: eventID
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
  key: 'newRecord',
  noun: 'New Record',

  display: {
    label: 'Model Event',
    description: 'Triggers when event you have configure for a model is triggered.',
    hidden: true,
  },

  operation: {
    inputFields: [
      // Select model
      {
        key: 'projectId',
        required: true,
        label: 'Base Model',
        dynamic: 'project.id.name',
        altersDynamicFields: true,
        helpText: 'Select a project to read record from.',
      },
      // Select docsndata models event
      {
        key: 'eventId',
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