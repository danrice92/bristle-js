import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  logError = (controllerName) => (error) => {
    console.log(
      `An error occurred in the ${controllerName} controller.`,
      error
    );
  };
}
