import EmberRouter from '@ember/routing/router';
import config from 'bristle-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' }); // root path

  // public-only pages
  this.route('sign-up');

  // public or private pages
  this.route('about');
  this.route('contact-us');

  // private pages
  this.route('email-verification');
});
