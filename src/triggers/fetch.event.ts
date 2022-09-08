import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL } from '../utils';

const getModelEvents = async (z: ZObject, bundle: Bundle) => {
    
  const response = await z.request(
    `${BASE_URL}/model/${bundle.inputData.projectId}/events`
  );
  
  const { data } = response.data

  return Object.keys(data).map(k => ({ 
    id: data[k].id, 
    name: data[k].name, 
    description: data[k].description 
  }))
};

export default {
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