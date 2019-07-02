import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  fillIn,
  typeIn
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Date', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and datepicker', async function(assert) {
    assert.expect(2);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.dom('input[type="date"]:enabled').exists({ count: 1 });
    assert.dom('label').exists({ count: 1 });
  });

  skip('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.dom('input[type="date"]').hasValue(this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label=label value=value}}`);
    assert.dom('label').hasText(this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('value', new Date());
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-date onChange=onChange label='Label' value=value}}`);
    await fillIn('input', 'Hello');
    await typeIn('input', 'There');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value disabled=true}}`);
    assert.dom('input[type="date"]').isDisabled();
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value formDisabled=true}}`);
    assert.dom('input[type="date"]').isDisabled();
  });
});
