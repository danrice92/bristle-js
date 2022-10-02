import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { click, currentURL, find, visit } from '@ember/test-helpers';

describe('Landing page and navigation', function() {
  setupApplicationTest();

  it('can visit /', async function() {
    await visit('/');
    expect(currentURL()).to.equal('/');
    expect(find('a.navbar-brand')).to.have.text('Bristle');
    expect(find('.bold-h1')).to.have.text('Prepare Your Career for Takeoff.');
  });

  it('can visit /about', async function() {
    await visit('/about');
    expect(currentURL()).to.equal('/about');
    expect(find('h2.header')).to.have.text('About Bristle');

    const homeButton = find('.navbar-brand');
    expect(homeButton).to.have.text('Bristle');

    await click(homeButton);
    expect(currentURL()).to.equal('/');
  });

  it('can visit /contact-us', async function() {
    await visit('/contact-us');
    expect(currentURL()).to.equal('/contact-us');
    expect(find('h2.header')).to.have.text('Contact Us');

    const homeButton = find('.navbar-brand');
    expect(homeButton).to.have.text('Bristle');

    await click(homeButton);
    expect(currentURL()).to.equal('/');
  });

  it('can navigate using the nav-bar', async function() {
    await visit('/');
    await click('nav a#menu-sign-up');
    expect(currentURL()).to.equal('/sign-up');

    await click('nav a#menu-index');
    expect(currentURL()).to.equal('/');
  });

  it('can sign up using the Sign up button', async function() {
    await visit ('/');
    expect(currentURL()).to.equal('/');

    const signUpButton = find('a.primary-button');
    expect(signUpButton).to.have.text('Sign up');

    await click(signUpButton);
    expect(currentURL()).to.equal('/sign-up');
  });
});
