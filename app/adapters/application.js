import RESTAdapater from '@ember-data/adapter/rest';
import { underscore } from '@ember/string';
import fetch from 'fetch';

export default class ApplicationAdapter extends RESTAdapater {
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
    try {
      const response = await fetch(
        `${this.host}/${this.namespace}/users`,
        {
          method: 'post',
          headers: this.headers,
          body: JSON.stringify(body)
        }
      );
      const json = await response.json();
      console.log('hey look, it RESTful', json)
      return json;
    } catch (error) {
      console.log('Caught error:', error);
      return error;
    }
  }
}
