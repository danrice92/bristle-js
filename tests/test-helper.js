import Application from 'course-of-life-js/app';
import config from 'course-of-life-js/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
