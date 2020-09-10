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
      <slot name="label" v-bind="{ value, errors, ...veeProps }">
        <div v-if="label" class="reform-label">{{ label }}</div>
      </slot>
      <div class="reform-control">
        <slot name="icon" v-bind="{ value, errors, ...veeProps }"></slot>
        <slot
          name="input" :on="{ input }" v-bind="{ value, errors, ...veeProps }">
          <input
            @input="input($event.target.value)"
            :value="value"
            :placeholder="placeholder"
            class="reform-input">
        </slot>
      </div>
    </label>
    <slot name="error" v-bind="{ value, errors, ...veeProps }">
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
.reform-label {
  padding: 0 0.25rem;
}

.reform-control {
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
}

.reform-invalid.reform-dirty .reform-control {
  box-shadow: 0 0 2px 1px #e74c3c;
}

.reform-control .reform-input {
  width: 100%;
  padding: 0.125rem 0.25rem;
  border: none;
  background-color: inherit;

}

.reform-error {
  font-size: 0.75rem;
  line-height: 1.4;
  color: #e74c3c;
}

.reform-error::after {
  content: " ";
  font-size: 0;
  white-space: pre;
}
</style>
