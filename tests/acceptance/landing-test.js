import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | landing', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('CloneForge');
    assert.dom('h2').hasText('Welcome to CloneForge');
    const aboutButton = document.querySelector('.menu-about');
    assert.dom(aboutButton).hasText('About');
    await click(aboutButton);
    
    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('CloneForge');
    assert.dom('h2').hasText('About CloneForge');
    const contactButton = document.querySelector('.menu-contact');
    assert.dom(contactButton).hasText('Contact');
    await click(contactButton);

    assert.equal(currentURL(), '/contact');
  });

  test('visiting /contact', async function(assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('CloneForge');
    assert.dom('h2').hasText('Contact Us');
    const homeButton = document.querySelector('a h1');
    assert.dom(homeButton).hasText('CloneForge');
    await click(homeButton);

    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('CloneForge')
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/contact');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
