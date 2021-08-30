import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Service from '@ember/service';

class StoreStub extends Service {
  createRecord() {
    return { email: 'user@example.com', isValid: true, save: () => true }
  }
}

module('Acceptance | sign-up', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:store', StoreStub);
  });

  test('Signing up for an account', async function(assert) {
    await visit('/sign-up');
    assert.equal(currentURL(), '/sign-up');
    assert.dom('h2').hasText('Sign up');

    await fillIn('input[name="email"]', 'user@example.com');
    await click('button[type="submit"]');

    assert.equal(currentURL(), '/email-verification');
  });
});