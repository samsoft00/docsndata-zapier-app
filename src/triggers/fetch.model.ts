import { Bundle, ZObject } from 'zapier-platform-core';
import { BASE_URL } from '../utils';

const getModels = async (z: ZObject, bundle: Bundle) => {
  const response = await z.request(`${BASE_URL}/model`);
  
  const { data } = response.data
  return Object.keys(data).map(k => ({ id: data[k].id, name: data[k].name }))
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
      name: 'Customer',
    },
  },
};