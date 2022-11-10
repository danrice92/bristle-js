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
  @service cookies;

  @action async createUser(event) {
    event.preventDefault();
    const { email, firstName, lastName, store, router, cookies } = this;
    const now = new Date();
    const oneYearFromNow = now.setFullYear(now.getFullYear() + 1);
    const logError = (error) => console.log('An error occurred in the sign-up controller.', error);

    let user = store.createRecord('user', {
      email,
      first_name: firstName,
      last_name: lastName
    });

    if (!user.isValid) {
      logError('user was not valid');
      return;
    }

    user.save().then((response) => {
      store.pushPayload('user', response.user);
      cookieService.write('bristleCUT', response.authentication_token, { domain: 'localhost', expires: oneYearFromNow });
      router.transitionTo('email-verification');
    }).catch(logError);
  }
}
