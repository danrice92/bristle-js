import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import _ from 'lodash';

export default class EmailVerificationRoute extends Route {
  @service store;

  async model() {
  }
}
