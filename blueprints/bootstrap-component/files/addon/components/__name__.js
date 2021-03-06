import Ember from 'ember';
import layout from '../../templates/components/<%= dasherizedModuleName %>';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  /*
    autocomplete: {
      default: 'email',
      description: 'Indicates whether the value can be automatically completed by the browser.',
      type: PropTypes.oneOf(['off', 'email']),
    },
  */
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
