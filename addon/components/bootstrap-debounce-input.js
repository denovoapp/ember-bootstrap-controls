import Ember from 'ember';
import layout from '../templates/components/bootstrap-debounce-input';
import InputableMixin from '../mixins/components/inputable';
import computedActionKey from '../utils/computed-action-key';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  layout: layout,

  value: "",
  valueText: "",
  debounce: 1000,
  label: null,
  placeholder: null,
  required: false,

  didReceiveAttrs() {
    this.set('valueText', this.get('value'));
  },

  onValueTextChange: function() {
    if(this.get('valueText') != this.get('value')) {
      Ember.run.debounce(this, this.applyValue, this.get('debounce'));
    }
  }.observes('valueText'),

  applyValue: function() {
    this.set('value', this.get('valueText'));
  },

  actions: {
    applyValueImmediately() {
      this.set('value', this.get('valueText'));
    }
  },
});