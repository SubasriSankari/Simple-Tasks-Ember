import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | zoho-corporation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:zoho-corporation');
    assert.ok(route);
  });
});
