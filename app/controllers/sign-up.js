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
    const { email, firstName, lastName } = this;
    const cookieService = this.get('cookies');
    const now = new Date();
    const oneYearFromNow = now.setFullYear(now.getFullYear() + 1);
    const logError = (error) => console.log('An error occurred in the sign-up controller.', error);

    const user = this.store.createRecord('user', {
      email,
      first_name: firstName,
      last_name: lastName
    });

    if (user.isValid) {
      user.save().then((response) => {
        console.log('response', response);
        this.store.pushPayload('user', response.user);
        cookieService.write('bristleCUT', response.authentication_token, { domain: 'localhost', expires: oneYearFromNow });

        console.log('cookie monster want cookies', cookieService.read())
        this.router.transitionTo('email-verification');
      }).catch(logError);
    }
  }
}
