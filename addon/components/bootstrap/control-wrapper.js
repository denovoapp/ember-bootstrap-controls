import Component from '@ember/component';
import InputableMixin from '../../mixins/components/-inputable';
import layout from '../../templates/components/bootstrap/control-wrapper';

export default Component.extend(InputableMixin, {
  layout,
  classNameBindings: ['floatingLabel:form-label-group'],
});
