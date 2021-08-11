import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sign-up', function(hooks) {
  setupApplicationTest(hooks);

  test('Signing up for an account', async function(assert) {
    await visit('/sign-up');
    assert.equal(currentURL(), '/sign-up');
    assert.dom('input[type="email"]').exists();
    assert.dom('button[type="submit"]').exists();

  //   const homeButton = document.querySelector('a.navbar-brand');
  //   await click(homeButton);
  });
});