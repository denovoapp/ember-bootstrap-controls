import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-pagination-nav/page-link';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['page-link'],
  attributeBindings: ['tabindex', 'href'],

  href: '#!',

  //TODO: Add prop definitions
  disabled: undefined,
  active: undefined,

  click(e) {
    e.preventDefault();
    const disabled = this.get('disabled');
    const active = this.get('active');

    if (!disabled && !active) {
      return this.get('action')(...arguments);
    }
  }
});
