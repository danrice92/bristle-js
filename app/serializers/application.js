import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  serialize(snapshot, options) {
    let data = {};
    snapshot.eachAttribute((key) => {
      data[key] = snapshot.attr(key);
    });
    return {[`${snapshot.modelName}`]: data};
  }
}