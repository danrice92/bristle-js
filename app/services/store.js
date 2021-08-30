import Store from '@ember-data/store';

export default class BristleStore extends Store {
  createRecord(model, params) {
    console.log('model and params in store: ', model, params)
  }
}