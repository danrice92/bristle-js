import Component from '@glimmer/component';
import { action } from '@ember/object';
import _ from 'lodash';

export default class EmailVerificationInput extends Component {
  fields = [1, 2, 3, 4, 5, 6];

  fieldAtPosition = (position) =>
    document.querySelector(`input[data-position="${position}"]`);

  @action moveCursor(event) {
    const { key, metaKey, target } = event;
    if (!event.metaKey) event.preventDefault();
    const initialValue = target.value;
    const position = _.toNumber(target.dataset.position);

    switch (key) {
      case 'Backspace':
        if (_.isEmpty(initialValue) && position > 1) {
          const previousField = this.fieldAtPosition(position - 1);
          previousField.value = '';
          previousField.focus();
        } else {
          target.value = '';
        }
        break;
      case 'Delete':
        target.value = '';
        break;
      default:
        if (metaKey || key.length !== 1) return;

        target.value = _.capitalize(_.toString(key));
        if (position < 6) {
          this.fieldAtPosition(position + 1).focus();
        }
    }
  }
}
