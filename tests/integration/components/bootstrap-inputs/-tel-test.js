import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-inputs/-tel', 'Integration | Component |  Bootstrap Inputs | Telephone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  // this.set('noop', () => {});
  // this.render(hbs`{{bootstrap-inputs/-tel action=noop}}`);
  this.set('label', 'Phone Label');
  this.set('value', '5555555555'); //555 555 5555
  this.render(hbs`{{bootstrap-inputs/-tel value=value label=label}}`);

  // assert.equal(this.$().text().trim(), this.get('label'));

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-tel value=value label=label}}
      {{label}}
    {{/bootstrap-inputs/-tel}}
  `);

  // assert.equal(this.$().text().trim(), this.get('label'));

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
