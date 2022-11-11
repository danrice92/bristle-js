import RESTAdapater from '@ember-data/adapter/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default class ApplicationAdapter extends RESTAdapater {
  host = 'http://localhost:3000';
  namespace = 'api/v1';
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  pathForType(modelName) {
    return pluralize(underscore(modelName));
  }
};
