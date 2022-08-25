import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL, Endpoint, MODEL_SAMPLE as sample } from '../utils'

const findRecord = async (z: ZObject, bundle: Bundle) => {
  const recordURL = new URL(Endpoint.Models, BASE_URL)
  const response = await z.request({
    method: 'GET',
    url: recordURL.toString(),
    headers: { 'Content-Type': 'application/json' }
  });
  
  return response.data;
};

export default {
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
      // Select docsndata event
      {
        key: 'event_id',
        required: true,
        label: 'Event',
        dynamic: 'event.id.name',
        altersDynamicFields: true,
        helpText: 'Select event to run for the base model above',
      }
    ],
    perform: findRecord,
    sample,
  },
};