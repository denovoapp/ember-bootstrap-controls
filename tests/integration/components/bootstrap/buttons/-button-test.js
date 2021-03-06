import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/buttons/-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a button', async function(assert) {
    this.set('noop', () => {});
    assert.expect(2);
    await render(hbs`{{bootstrap/buttons/-button action=noop}}`);
    assert.equal(findAll('button').length, 1);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it uses disabled', async function(assert) {
    this.set('noop', () => {});
    assert.expect(3);
    await render(hbs`{{bootstrap/buttons/-button action=noop disabled=true}}`);
    assert.equal(findAll('button').length, 1);
    assert.equal(findAll('button:disabled').length, 1);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders in block syntax', async function(assert){
    this.set('noop', () => {});
    assert.expect(2);
    await this.render(hbs`
      {{#bootstrap/buttons/-button
        action=noop
      }}
        template block text
      {{/bootstrap/buttons/-button}}
    `);
    assert.equal(findAll('button').length, 1);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
