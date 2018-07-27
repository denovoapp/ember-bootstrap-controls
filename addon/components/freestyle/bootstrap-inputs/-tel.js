import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-tel';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-tel';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Telephone',
  }),

  basicValue: '',
});
