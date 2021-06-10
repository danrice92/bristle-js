import Application from 'bristle-js/app';
import config from 'bristle-js/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
