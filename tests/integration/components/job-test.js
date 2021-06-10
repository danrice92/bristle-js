import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const mockJob = {
  title: 'Toys R Us',
  imageSource: 'https://media1.popsugar-assets.com/files/thumbor/fP1ssP2FBASLssl67umKKTQWPOU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/03/12/635/n/24155406/tmp_Mg4ylG_0cae29c5d0e422dd_7259691694_fb6b9b4ed0_o.jpg',
  startDate: 'November 2008',
  endDate: 'January 2009',
  startingPay: '$8/hour',
  endingPay: '$8/hour',
  location: 'Fort Collins, CO',
  career: 'Retail Sales'
};

module('Integration | Component | job', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information and expands to show more', async function(assert) {
    this.setProperties({ job: mockJob });
    await render(hbs`<Job @job={{this.job}}/>`);

    assert.dom('div').hasClass('job');
    assert.dom('div h3').hasText('Toys R Us');
    assert.dom('div .detail.date-range').includesText('Start Date: November 2008');
    assert.dom('div .detail.date-range').includesText('End Date: January 2009');
    assert.dom('div .detail.pay-range').includesText('Starting Pay: $8/hour');
    assert.dom('div .detail.pay-range').includesText('Ending Pay: $8/hour');
    assert.dom('div .image').exists();
    assert.dom('div .detail').doesNotHaveClass('location');
    assert.dom('div .detail').doesNotHaveClass('career');

    await click('div.details');

    assert.dom('div .detail.location').includesText('Fort Collins, CO');
    assert.dom('div .detail.career').includesText('Part of my career in: Retail Sales');
  });
});