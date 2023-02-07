'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true,
    },
    'ember-fetch': {
      nativePromise: true,
      preferNative: true,
    },
    sassOptions: {
      sourceMapEmbed: true,
    },
    debug: {
      LOG_PAYLOADS: true, // data store received to update cache with
      LOG_OPERATIONS: true, // updates to cache remote state
      LOG_MUTATIONS: true, // updates to cache local state
      LOG_NOTIFICATIONS: true,
      LOG_REQUEST_STATUS: true,
      LOG_IDENTIFIERS: true,
      LOG_GRAPH: true,
      LOG_INSTANCE_CACHE: true,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
