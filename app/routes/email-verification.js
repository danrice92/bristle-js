import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import _ from 'lodash';

export default class EmailVerificationRoute extends Route {
  @service store;

  async model() {
    console.log('The model hook just ran!');
    // const records = await this.store.findAll('user');
    // console.log('here is the first one', records.objectAt(0));

    // const recordsInEmber = await this.store.peekRecords('users');
    console.log('found records', this.store);
    return 'Hello Ember!';
  }
}
