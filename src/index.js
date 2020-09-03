import FormControl from './FormControl.vue';
import FormField from './FormField.vue';

export { FormControl, FormField };

export function install(Vue) {
  Vue.component(FormControl.name, FormControl);
  Vue.component(FormField.name, FormField);
}
