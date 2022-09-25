import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignUpController extends Controller {
  @tracked email = '';
  @tracked firstName = '';
  @tracked lastName = '';
  @service store;
  @service router;

  @action async createUser(event) {
    event.preventDefault();
    const { email, firstName, lastName } = this;
    const user = this.store.createRecord('user', {
      email,
      first_name: firstName,
      last_name: lastName
    });

    if (user.isValid) {
      const visitEmailVerificationPath = () => this.router.transitionTo('email-verification');
      const logError = (error) => console.log('An error occurred in the sign-up controller.', error);
      user.save().then(visitEmailVerificationPath).catch(logError);
    }
  }
}
