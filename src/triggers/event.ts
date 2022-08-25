import { Bundle, ZObject } from 'zapier-platform-core';

const getEvents = async (z: ZObject, bundle: Bundle) => {
    /*
  const response = await z.request(
    'https://auth-json-server.zapier-staging.com/movies'
  );
  return response.data;
    */
  return Promise.resolve([
    { 
        id: 123, 
        name: 'New Record', 
        description: 'Triggers when a new record is created. Optionally: triggers when any record (new or existing) is first added.' 
    },
    { 
        id: 124, 
        name: 'New or Updated Record',  
        description: 'Trigger when a new record is created or an existing record is updated.' 
    }
  ])
};

export default {
  key: 'triggerEvents',
  noun: 'Events',

  display: {
    label: 'Events',
    description: 'Triggers when a new event is added to Engage.',
    hidden: true
  },  

  operation: {
    perform: getEvents,
    sample: {
      id: '1',
      title: 'example',
    },
  },
};