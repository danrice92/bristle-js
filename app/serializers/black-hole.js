import ApplicationSerializer from './application';

export default class BlackHoleSerializer extends ApplicationSerializer {
  normalize(model, hash, prop) {
    return super.normalize(model, { id: 1, attributes: {} }, prop);
  }
}
