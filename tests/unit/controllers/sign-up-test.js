import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import _ from 'lodash';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Controller | sign-up', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('should have services', function (assert) {
    const controller = this.owner.lookup('controller:sign-up');

    assert.notEqual(controller.cookies, undefined);
    assert.notEqual(controller.router, undefined);
    assert.notEqual(controller.store, undefined);
  });

  test('createUser action transitions to the email-verification path', function (assert) {
    assert.expect(1);
    const controller = this.owner.lookup('controller:sign-up');
    controller.model = run(() =>
      this.owner.lookup('service:store').createRecord('user')
    );
    controller.router = {
      transitionTo: (path) => {
        assert.strictEqual(path, 'email-verification');
      },
    };
    run(() => controller.createUser({ preventDefault: _.noop }));
  });
});
