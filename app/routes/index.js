import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    try {
      const response = await fetch('http://localhost:3000/api/v1/employments');
      const responseJSON = await response.json();
      console.log("responseJSON", responseJSON)
      return responseJSON.employments;
    } catch (error) {
      console.log("nah it errored", error)
    }
  }
}
