import EmberRouter from '@ember/routing/router';
import config from 'bristle-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // root path
  this.route('/');

  // public pages
  this.route('about');
  this.route('contact-us');
  this.route('sign-up');

  // private pages
  this.route('employments');
});
