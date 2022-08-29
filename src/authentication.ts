import { Bundle, ZObject } from "zapier-platform-core"
import { BASE_URL } from "./utils"

const testAuth = async (z: ZObject, bundle: Bundle) => {
  
  const request = await z.request(`${BASE_URL}/user`)
  if (![200, 201].includes(request.status)) {
    throw new Error('Invalid Team ID or API Key')
  }

  return request.data.data
}

const getConnectionLabel = (z: ZObject, bundle: Bundle) => {
  // extract team information from bundle
  const { team } = bundle.inputData
  if (team) return `${team.name}`
  return `${bundle.authData.username}`;
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