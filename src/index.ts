import { 
  Bundle, 
  HttpRequestOptions, 
  HttpResponse, 
  ZObject } from 'zapier-platform-core';
import authentication from './authentication'

import ModelCreate from './creates/model';
import ModelTrigger from './triggers/model';
import FetchModelTrigger from './triggers/fetch.model';
import FetchEventTrigger from './triggers/fetch.event'

import { version as platformVersion } from 'zapier-platform-core';
const { version } = require('../package.json');

const addApiKeyToHeader = (
  req: HttpRequestOptions,
  z: ZObject,
  bundle: Bundle
) => {
  // Hard-coded api key just to demo. DON'T do auth like this for your production app!
  const basicHash = Buffer.from(`${bundle.authData.username}:${bundle.authData.password}`).toString(
    'base64'
  );

  req.headers = req.headers || {};
  req.headers['Authorization'] = `Basic ${basicHash}`;
  return req;
};

const handleHTTPError = (resp: HttpResponse, z: ZObject) => {
  if (resp.status >= 400) {
    if (resp.data?.error) {
      throw new Error(resp.data.error)
    }
    throw new Error(`Unexpected status code ${resp.status}`)
  }
  return resp
}

export default {
  version,
  platformVersion,
  authentication,

  // middleware
  beforeRequest: [addApiKeyToHeader],
  afterResponse: [handleHTTPError],

  triggers: {
    [ModelTrigger.key]: ModelTrigger,
    [FetchModelTrigger.key]: FetchModelTrigger,
    [FetchEventTrigger.key]: FetchEventTrigger,
  },

  creates: {
    [ModelCreate.key]: ModelCreate,
  },
};
