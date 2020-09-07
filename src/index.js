import Form from './Form.vue';
import FormControl from './FormControl.vue';
import FormField from './FormField.vue';

export { FormControl, FormField, Form };

export function install(Vue) {
  Vue.component(FormControl.name, FormControl);
  Vue.component(Form.name, Form);
  Vue.component(FormField.name, FormField);
}
