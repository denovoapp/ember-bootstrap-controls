import ButtonComponent from './-button';
import layout from '../../../templates/components/bootstrap/buttons/archive-button';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from './-button';

const { buttonText } = propDefinitions;
const newButtonTextDefinitions = { ...buttonText, default: 'Archive' };
const newPropDefinitions = Object.assign({}, propDefinitions, { buttonText: newButtonTextDefinitions })


export default ButtonComponent.extend({
  layout,
  propTypes: BuilderForPropTypes(newPropDefinitions),
  classNames: ['btn-primary'],
  
  getDefaultProps() {
    return BuilderForPropDefaults(newPropDefinitions)
  },
});
