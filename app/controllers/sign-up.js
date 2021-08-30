import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SignUpController extends Controller {
  @tracked email = '';

  @action async createUser(event) {
    event.preventDefault();
    console.log("button working?", event, 'email:', this.email, this.model)
    this.transitionToRoute('/');
  }
}
