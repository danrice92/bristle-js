import Route from '@ember/routing/route';
// import store from '@ember-data/store';
// import BristleStore from 'bristle-js/app/services/store';

export default class SignUpRoute extends Route {
  async model(params) {
    // console.log('idk, random nonsense!', params, 'magical?', this.store, this.adapter)
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

  //   From a template, use <LinkTo />
  // From a route, use the transitionTo() method
  // From a controller, use the transitionToRoute() method
  // From anywhere else in your application, such as a component, inject the Router Service and use the transitionTo() method

  // When should we create a Controller?
  //   We want to pass down actions or variables to share with a Route’s child components
  // We need to compute a value based on the results of the model hook
  // We need to support query parameters
}