import { Bundle, ZObject } from "zapier-platform-core"
import { BASE_URL } from "./utils"

const testAuth = (z: ZObject, bundle: Bundle) => {
  
  const promise = z.request(`${BASE_URL}/user`)
  return promise.then(response => {
    if (response.status !== 200) {
      throw new Error('Invalid API Key')
    }
  })
}

const getConnectionLabel = (z: ZObject, bundle: Bundle) => {
  return `- ${bundle.authData.username}`;
}

export default {
  type: 'custom',
  test: testAuth,
  connectionLabel: getConnectionLabel,
  fields: [
    {
      key: 'username',
      label: 'Team ID',
      type: 'string',
      required: true,
      helpText: 'Available in Settings -> Account on your DocsnData dashboard'
    },
    {
      key: 'password',
      label: 'Api Key',
      type: 'string',
      required: true,
    }
  ]
}