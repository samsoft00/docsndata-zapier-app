import { Bundle, ZObject } from 'zapier-platform-core';

const getModels = async (z: ZObject, bundle: Bundle) => {
    /*
  const response = await z.request(
    'https://auth-json-server.zapier-staging.com/movies'
  );
  return response.data;
    */
  return Promise.resolve([
    { id: 123, name: 'Customer' },
    { id: 124, name: 'Order' }
  ])
};

export default {
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
      title: 'example',
    },
  },
};