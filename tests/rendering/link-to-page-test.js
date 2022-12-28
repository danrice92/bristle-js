import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import config from '../../config/environment';

module('Rendering | Component | link-to-page', function(hooks) {
  setupRenderingTest(hooks);

  test('should have the correct properties', async function(assert) {
    await render(hbs `
      <LinkToPage
        @route="sign-up"
        @aria-current="page"
        @class="nav-link"
        @content="Sign up"
        @data-test-link-to-page="sign-up"
        @id="menu-sign-up"
      />
    `);
    const link = this.element.querySelector('[data-test-link-to-page="sign-up"]');

    assert.dom(link).hasProperty('href', `${config.APP.rootURL}/sign-up`);
    assert.dom(link).hasAria('current', 'page');
    assert.dom(link).hasClass('nav-link');
    assert.dom(link).hasText('Sign up');
    assert.dom(link).hasProperty('id', 'menu-sign-up');
  });
});
