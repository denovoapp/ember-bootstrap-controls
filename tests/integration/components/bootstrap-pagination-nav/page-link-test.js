import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-pagination-nav/page-link', 'Integration | Component | bootstrap pagination nav/page link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-pagination-nav/page-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-pagination-nav/page-link}}
      template block text
    {{/bootstrap-pagination-nav/page-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});