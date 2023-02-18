import RESTAdapater from '@ember-data/adapter/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapater {
  @service cookies;

  authenticationToken = () => {
    const cookies = this.cookies.read();
    console.log('adding token', cookies.bristleCUT);
    return cookies.bristleCUT;
  };

  pathForType = (modelName) => {
    return pluralize(underscore(modelName));
  };

  host = 'http://localhost:3000';
  namespace = 'api/v1';
  headers = {
    Accept: 'application/json',
    authentication_token: this.authenticationToken(),
    'Content-Type': 'application/json'
  };
}
