import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';
import _ from 'lodash';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  serialize() {
    let json = super.serialize(...arguments);
    return json;
  }

  normalize() {
    return super.normalize(...arguments);
  }

  normalizeResponse() {
    return super.normalizeResponse(...arguments);
  }

  modelNameFromPayloadKey(payloadKey) {
    if (!_.isNaN(_.toNumber(payloadKey))) {
      return super.modelNameFromPayloadKey('black-hole');
    } else {
      return super.modelNameFromPayloadKey(payloadKey);
    }
  }
}
