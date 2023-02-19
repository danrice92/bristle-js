import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('should set the host, namespace, and headers', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.strictEqual(typeof adapter.host, 'string');
    assert.strictEqual(typeof adapter.namespace, 'string');
    assert.strictEqual(typeof adapter.headers, 'object');
  });

  test('should make the model name Rails-friendly', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.strictEqual(adapter.pathForType('user'), 'users');
    assert.strictEqual(
      adapter.pathForType('employmentOpportunity'),
      'employment_opportunities'
    );
    assert.strictEqual(
      adapter.pathForType('careerHistory'),
      'career_histories'
    );
  });
});
