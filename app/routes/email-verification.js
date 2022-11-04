import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FavoritePostsRoute extends Route {
  @service store;

  async model() {
    console.log('The model hook just ran!');
    const record = await this.store.findRecord('user', 1)
    console.log('here is the first user', record, record.email, record.first_name, record.last_name, record.id, record.verification_code, record.email_verified)
    return 'Hello Ember!';
  }
}
