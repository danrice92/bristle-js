import ApplicationController from './application';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const oneYearFromNow = () => {
  const now = new Date();
  return now.setFullYear(now.getFullYear() + 1);
};

export default class SignUpController extends ApplicationController {
  @service cookies;
  @service router;
  @service store;

  @action createUser(event) {
    event.preventDefault();
    const { cookies, logError, model, router, store } = this;

    if (!model.isValid) {
      logError('sign-up')('user was not valid');
      return;
    }

    model
      .save()
      .then((response) => {
        store.pushPayload('user', response.user);
        cookies.write('bristleCUT', response.authenticationToken, {
          domain: 'localhost',
          expires: oneYearFromNow,
        });
        router.transitionTo('email-verification');
      })
      .catch(logError('sign-up'));
  }
}
