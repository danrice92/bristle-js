import ApplicationSerializer from './application';
import { underscore } from '@ember/string';

export default class UserSerializer extends ApplicationSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }
}
