import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, fillIn, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Url', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-url label='label' value='http://wild.land'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-url label='label' value='http://wild.land'}}`);
    assert.equal(findAll('input[type="url"]:enabled').length, 1);
    assert.equal(findAll('label').length, 1);
  });

  test('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', 'http://wild.land');
    await render(hbs`{{bootstrap-inputs/-url label='label' value=value}}`);
    assert.equal(find('input[type="url"]').value, this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-url label=label value='http://wild.land'}}`);
    assert.equal(find('label').textContent.trim(), this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-url onChange=onChange label='label' value='http://wild.land'}}`);
    await fillIn('input', 'http://wild.land/tests');
    await typeIn('input', 'http://wild.land/ember');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-url label='label' value='http://wild.land' disabled=true}}`);
    assert.equal(findAll('input[type="url"]:disabled').length, 1);
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-url label='label' value='http://wild.land' formDisabled=true}}`);
    assert.equal(findAll('input[type="url"]:disabled').length, 1);
  });
});
