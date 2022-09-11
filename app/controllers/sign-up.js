import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import { service } from '@ember/service';

export default class SignUpController extends Controller {
  @tracked email = '';
  @tracked firstName = '';
  @tracked lastName = '';

  @action async createUser(event) {
    event.preventDefault();
    const { email, firstName, lastName } = this;
    const user = this.store.createRecord('user', { email, firstName, lastName });

    if (user.isValid) {
      console.log('creating that record. email:', this.store)
      user.save().then(() => this.transitionToRoute('email-verification')).catch((reason) => console.log('reason?', reason));
    }
  }

  // From a template, use <LinkTo />
  // From a route, use the transitionTo() method
  // From a controller, use the transitionToRoute() method
  // From anywhere else in your application, such as a component, inject the Router Service and use the transitionTo() method


  // When should we create a Controller?
  // We want to pass down actions or variables to share with a Route’s child components
  // We need to compute a value based on the results of the model hook
  // We need to support query parameters


  // old code from sign-up router research

  // this.store.createRecord('user', params);
  // this.store.adapterFor('user').createRecord(params)
  // this.adapterFor('user').createRecord('user', params)

  // const request = new Request('http://localhost:3000/api/v1/sign-ups', { method: 'POST', body: this.params });
  // try {
  //   const response = await fetch('http://localhost:3000/api/v1/employments');
  //   const responseJSON = await response.json();
  //   console.log("responseJSON", responseJSON)
  //   return responseJSON.employments;
  // } catch (error) {
  //   console.log("nah it errored", error)
  // }
}
