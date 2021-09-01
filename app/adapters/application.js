import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';
import fetch from 'fetch';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000';
  namespace = 'api/v1';
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  pathForType(type) {
    return underscore(type);
  }

  createRecord = async(store, type, snapshot) => {
    let body = this.serialize(snapshot);
    console.log('serialized data', body)
    const response = await fetch(
      `${this.host}/${this.namespace}/users`,
      {
        method: 'post',
        headers: this.headers,
        body: JSON.stringify(body)
      }
    );
    console.log('persisted?', response)
  }
}
