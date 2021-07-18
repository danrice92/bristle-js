import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | employment', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
  });

  const employmentAttrs = {
    job_title: 'Cashier',
    employer_name: 'Toys R Us',
    start_date: '2008-11-26',
    end_date: '2009-01-03',
    starting_pay: '8.00',
    ending_pay: '8.00',
    location: {address: '123 Example Street', city: 'Fort Collins', state: 'CO', zipcode: '80528'},
    career_title: 'Retail'
  };

  test('it has expected attributes', function(assert) {
    const employment = this.store.createRecord('employment', employmentAttrs);

    assert.ok(employment);
    assert.equal(employment.job_title, employmentAttrs.job_title);
    assert.equal(employment.employer_name, employmentAttrs.employer_name);
    assert.equal(employment.start_date, employmentAttrs.start_date);
    assert.equal(employment.end_date, employmentAttrs.end_date);
    assert.equal(employment.starting_pay, 8.00);
    assert.equal(employment.ending_pay, 8.00);
    assert.equal(employment.location, employmentAttrs.location);
    assert.equal(employment.career_title, employmentAttrs.career_title);
  });
});
