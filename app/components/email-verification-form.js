import Component from '@glimmer/component';
import { action } from '@ember/object';
import _ from 'lodash';

export default class EmailVerificationForm extends Component {
  fields = [
    { position: 1, value: '' },
    { position: 2, value: '' },
    { position: 3, value: '' },
    { position: 4, value: '' },
    { position: 5, value: '' },
    { position: 6, value: '' }
  ];

  fieldAtPosition = (position) => {
    return document.querySelector(`input[data-position="${position}"]`);
  };

  submitForm = () => {};

  setValue = ({ field, position, value }) => {
    field.value = value;
    const fieldState = _.find(this.fields, { position });
    fieldState.value = value;
    console.log('fields', this.fields);
  };

  @action handleKeyDown(event) {
    const { key, metaKey, target } = event;
    if (!event.metaKey) event.preventDefault();
    const initialValue = target.value;
    const position = _.toNumber(target.dataset.position);

    switch (key) {
      case 'Backspace':
        if (_.isEmpty(initialValue) && position > 1) {
          const previousField = this.fieldAtPosition(position - 1);
          this.setValue({
            field: previousField,
            position: position - 1,
            value: ''
          });
          previousField.focus();
        } else {
          this.setValue({ field: target, position, value: '' });
        }
        break;
      case 'Delete':
        this.setValue({ field: target, position, value: '' });
        break;
      default:
        if (metaKey || key.length !== 1) return;
        const value = _.capitalize(_.toString(key));
        this.setValue({ field: target, position, value });
        if (position < 6) {
          this.fieldAtPosition(position + 1).focus();
        } else {
          this.submitForm();
        }
    }
  }
}
