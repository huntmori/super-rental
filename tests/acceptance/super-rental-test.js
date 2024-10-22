import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rental/tests/helpers';

module('Acceptance | super rental', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-rental', async function (assert) {
    await visit('/super-rental');

    assert.strictEqual(currentURL(), '/super-rental');
  });
});
