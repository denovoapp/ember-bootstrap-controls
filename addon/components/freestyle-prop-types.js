import Component from '@ember/component';
import layout from '../templates/components/freestyle-prop-types';
import { computed } from '@ember/object'
const definedTypes = ['arrayOf', 'bool', 'instanceOf', 'number', 'oneOf', 'string', 'date'];

export default Component.extend({
  layout,
  options: null,

  options: computed('propDefinitions', function() {
    let propDefinitions = this.propDefinitions;
    let properties = [];
    let componentName = '';
    let type = null;

    for (var key in propDefinitions) {
      if (propDefinitions.hasOwnProperty(key)) {
        componentName = 'freestyle-prop-types/-default';
        if(typeof(propDefinitions[key].type) === 'object') {
          type = propDefinitions[key].type;
        } else if (typeof(propDefinitions[key].type) === 'function') {
          type = propDefinitions[key].type();
        } else {
          window.alert("Unknown type: " + type + " at key " + key + ". Double check your PropTypes");
        }
        if (definedTypes.includes(type.type)) {
          componentName = `freestyle-prop-types/-${type.type.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
        }
        properties.push({
          componentName: componentName,
          description: propDefinitions[key].description,
          default: propDefinitions[key].default,
          name: key,
          required: type.required,
          type: type
        });
      }
    }
    properties.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    return properties;
  }),
});
