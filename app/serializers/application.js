import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  serialize(snapshot, options) {
    console.log('snapshot in serial', snapshot)
    let data = {};
    snapshot.eachAttribute((key, attribute) => {
      data[key] = snapshot.attr(key);
    });
    return {[`${snapshot.modelName}`]: data};
  }
}