import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  const finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes: function () {
      this.urlPrefix = 'http://localhost:3000';
      this.namespace = '/api/v1';
      // this.timing = 400;      // delay for each request, automatically set to 0 during testing
      this.post('/users', () => ({
        user: {
          id: 1,
          email: 'dan@novumopus.com',
          email_verified: false,
          first_name: 'Daniel',
          last_name: 'Rice',
          authentication_token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2Vy',
        },
      }));
    },
    serializers: applyEmberDataSerializers(config.serializers),
  };

  return createServer(finalConfig);
}

/*
  Shorthand cheatsheet:

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
*/
