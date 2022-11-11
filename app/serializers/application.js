import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  serialize(snapshot, options) {
    let json = super.serialize(...arguments);
    return json;
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(...arguments);
  }
};
