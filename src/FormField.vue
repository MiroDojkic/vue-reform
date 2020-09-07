<template>
  <validation-provider
    v-slot="{ errors }"
    v-bind="$attrs"
    :vid="name"
    :name="name"
    ref="validationProvider"
    class="reform-field"
    tag="div">
    <label>
      <slot name="label">
        <span v-if="label">{{ label }}</span>
      </slot>
      <div class="reform-input">
        <slot name="icon"></slot>
        <slot name="input" :on="{ input }" v-bind="{ value, errors }">
           <input
            :value="value"
            @input="input($event.target.value)"
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
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    rules: {
      type: [String, Object],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  computed: {
    value() {
      return this.values[this.name];
    }
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
