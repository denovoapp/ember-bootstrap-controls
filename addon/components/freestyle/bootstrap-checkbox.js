import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['freestyle-checkbox'],

  isChecked: true,
  isNotChecked: false,

  actions: {
    checkboxChange(/*newChecked, oldChecked*/) {
    },
    toggleFavorite(favorite){
    	console.log(`Favorite Triggered: ${favorite.toString()}`);
    }
  },
});