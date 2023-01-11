import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Application | sign-up', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('The user can complete the sign-up process', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    await click('[data-test-link-to-page="sign-up"]');
    assert.strictEqual(currentURL(), '/sign-up');

    await fillIn('[data-test-sign-up-first-name]', 'Test');
    await fillIn('[data-test-sign-up-last-name]', 'User');
    await fillIn('[data-test-sign-up-email]', 'testuser@example.com');
    await click('[data-test-sign-up-submit]');

    assert.strictEqual(currentURL(), '/email-verification');

    await fillIn('[data-position="1"]', '88776D');

    // assert.strictEqual(currentURL(), '/');
  });
});
