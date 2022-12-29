import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sign-up', function(hooks) {
  setupTest(hooks);

  test('should have a store service', function(assert) {
    const route = this.owner.lookup('route:sign-up');

    assert.notEqual(route.store, undefined);
  });

  test('should build a new user record', function(assert) {
    const route = this.owner.lookup('route:sign-up');
    const model = route.model();

    assert.strictEqual(model.authenticationToken, undefined);
    assert.strictEqual(model.email, undefined);
    assert.strictEqual(model.emailVerified, undefined);
    assert.strictEqual(model.firstName, undefined);
    assert.strictEqual(model.lastName, undefined);
  });
});
