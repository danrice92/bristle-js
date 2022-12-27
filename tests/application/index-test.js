import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Application | index', function(hooks) {
  setupApplicationTest(hooks);

  test('The user can visit the home page', async function(assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.bold-h1').hasText('Prepare Your Career for Takeoff.');
    assert.dom('a.primary-button').hasText('Sign up');
  });
});
