import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | job', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about the job', async function(assert) {
    await render(hbs`<Job />`);

    assert.dom('div').hasClass('job');
    assert.dom('div h3').hasText('Toys R Us');
    assert.dom('div .detail.date-range').includesText('Start Date: November 2008');
    assert.dom('div .detail.date-range').includesText('End Date: January 2009');
    assert.dom('div .detail.pay-range').includesText('Starting Pay: $8/hour');
    assert.dom('div .detail.pay-range').includesText('Ending Pay: $8/hour');
    assert.dom('div .detail.location').includesText('Fort Collins, CO');
    assert.dom('div .detail.career').includesText('Part of my career in: Retail Sales');
    assert.dom('div .image').exists();
  });
});
