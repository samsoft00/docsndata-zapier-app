import { Bundle, ZObject } from "zapier-platform-core"
import { BASE_URL, Endpoint } from './utils'

const testAuth = (z: ZObject, bundle: Bundle) => {
  // const authURL = new URL(Endpoint.Auth, BASE_URL)
    /*
  const promise = z.request(authURL.toString())
  return promise.then(response => {
    if (response.status !== 200) {
      throw new Error('Invalid API Key')
    }
  })
  */
  return Promise.resolve({
    username: 'test',
    client: {
      email: 'example@zample.info',
      name: 'Sams Cookie Shop',
    }
  })
}

export default {
  type: 'custom',
  test: testAuth,
  connectionLabel: (z: ZObject, bundle: Bundle) => {
    return bundle.inputData.username;
  },
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
      required: true
    }
  ]
}