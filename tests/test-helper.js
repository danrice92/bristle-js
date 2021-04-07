import Application from 'clone-forge-js/app';
import config from 'clone-forge-js/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
