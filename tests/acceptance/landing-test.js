import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | landing', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('PathSketch');
    const aboutButton = document.querySelector('.jumbo a.button:nth-of-type(2)');
    assert.dom(aboutButton).hasText('About Us');
    await click(aboutButton);
    
    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h2').hasText('About PathSketch');
    const contactButton = document.querySelector('.jumbo a.button:nth-of-type(3)');
    assert.dom(contactButton).hasText('Contact Us');
    await click(contactButton);

    assert.equal(currentURL(), '/contact');
  });

  test('visiting /contact', async function(assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
    assert.dom('h2').hasText('Contact Us');
    const homeButton = document.querySelector('.jumbo a.button:nth-of-type(1)');
    assert.dom(homeButton).hasText('Home');
    await click(homeButton);

    assert.equal(currentURL(), '/');
  });
});
