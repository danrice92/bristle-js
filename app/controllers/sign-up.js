import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SignUpController extends Controller {
  @tracked email = '';

  @action async createUser(event) {
    event.preventDefault();
    const user = this.store.createRecord('user', { email: this.email });

    if (user.isValid) {
      user.save();
      this.transitionToRoute('email-verification');
    }
  }
}
