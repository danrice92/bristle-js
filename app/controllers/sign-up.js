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
      const logError = (error) => console.log('An error occurred in the sign-up controller.', error);
      user.save().then((response) => {
        const { id, first_name, last_name, email, email_verified, authentication_token } = response;
        // this.store.push({
        //   data: {
        //     id: id,
        //     type: 'user',
        //     attributes: {
        //       first_name,
        //       last_name,
        //       email,
        //       email_verified,
        //       authentication_token
        //     }
        //   }
        // })
        this.store.pushPayload('user', response);
        console.log('response thing?', response)
        this.router.transitionTo('email-verification');
      }).catch(logError);
      // this.store.push(user).then(visitEmailVerificationPath).catch(logError);
    }
  }
}
