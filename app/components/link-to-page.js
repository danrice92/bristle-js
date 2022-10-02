import Component from '@glimmer/component';
import { action } from '@ember/object';
import bootstrap from 'bootstrap';

export default class LinkToPageComponent extends Component {
  @action collapseMobileDropdown() {
    const navBar = document.querySelector('.navbar-collapse');
    new bootstrap.Collapse(navBar, { toggle: false }).hide();
  }
}
