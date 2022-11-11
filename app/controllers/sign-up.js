import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const logError = (error) => console.log('An error occurred in the sign-up controller.', error);

const oneYearFromNow = () => {
  const now = new Date();
  return now.setFullYear(now.getFullYear() + 1);
};

export default class SignUpController extends Controller {
  @service cookies;
  @service router;
  @service store;

  @action async createUser(event) {
    event.preventDefault();
    const { cookies, model, router, store } = this;

    if (!model.isValid) {
      logError('user was not valid');
      return;
    }

    model.save().then((response) => {
      store.pushPayload('user', response.user);
      cookies.write('bristleCUT', response.authentication_token, { domain: 'localhost', expires: oneYearFromNow });
      router.transitionTo('email-verification');
    }).catch(logError);
  }
}
