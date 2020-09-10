<template>
  <validation-provider
    v-slot="{ errors, ...veeProps }"
    ref="validationProvider"
    v-bind="$attrs"
    :vid="name"
    :name="name"
    class="reform-field"
    tag="div">
    <label
      :class="{
        'reform-invalid': veeProps.invalid,
        'reform-dirty': veeProps.dirty,
        'reform-required': veeProps.required,
        'reform-changed': veeProps.changed,
        'reform-touched': veeProps.touched,
        'reform-pending': veeProps.pending
      }">
      </slot>
      <div class="reform-input">
        <slot name="icon"></slot>
        <slot name="input" :on="{ input }" v-bind="{ value, errors }">
          <input
            @input="input($event.target.value)"
            :value="value"
            :placeholder="placeholder">
        </slot>
      </div>
    </label>
    <slot name="error" :errors="errors">
      <div class="reform-error">
        {{ errors[0] }}
      </div>
    </slot>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'vue-reform-field',
  inject: ['values', 'setValue'],
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: null },
    placeholder: { type: String, default: null }
  },
  computed: {
    value: vm => vm.values[vm.name]
  },
  methods: {
    async input(value) {
      await this.$refs.validationProvider.validate(value);
      this.setValue(this.name, value);
    }
  },
  components: { ValidationProvider }
};
</script>

<style lang="css">
.reform-input {
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
}

.reform-invalid .reform-input {
  border: 1px solid red;
}

.reform-input input {
  width: 100%;
  border: none;
  background-color: inherit;

}

.reform-error {
  font-size: 0.75rem;
  color: red;
}

.reform-error::after {
  content: " ";
  font-size: 0;
  white-space: pre;
}
</style>
