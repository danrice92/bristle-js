import Application from 'path-sketch-js/app';
import config from 'path-sketch-js/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
