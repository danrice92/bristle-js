import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | landing', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('Bristle');
    assert.dom('h1').hasText('Prepare Your Career for Takeoff.');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');
    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('Bristle');
    assert.dom('h2').hasText('About Bristle');

    const homeButton = document.querySelector('a.navbar-brand');
    assert.dom(homeButton).hasText('Bristle');

    await click(homeButton);
    assert.equal(currentURL(), '/');
  });

  test('visiting /contact-us', async function(assert) {
    await visit('/contact-us');
    assert.equal(currentURL(), '/contact-us');
    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('Bristle');
    assert.dom('h2').hasText('Contact Us');

    const homeButton = document.querySelector('a.navbar-brand');
    assert.dom(homeButton).hasText('Bristle');

    await click(homeButton);
    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');
    assert.dom('nav').exists();
    assert.dom('nav a#menu-index').hasText('Bristle');
    assert.dom('nav a#menu-sign-up').hasText('Sign up');

    await click('nav a#menu-sign-up');
    assert.equal(currentURL(), '/sign-up');

    await click('nav a#menu-index');
    assert.equal(currentURL(), '/');
  });

  test('clicking the Sign up button', async function(assert) {
    await visit ('/');
    assert.equal(currentURL(), '/');

    const signUpButton = document.querySelector('a.primary-button');
    assert.dom(signUpButton).exists();
    assert.dom(signUpButton).hasText('Sign up');

    await click(signUpButton);
    assert.equal(currentURL(), '/sign-up');
  });
});
