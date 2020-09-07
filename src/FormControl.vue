<template>
  <validation-observer ref="observer" v-slot="veeProps" tag="div">
    <slot v-bind="{ ...veeProps, values, setValue, submit }"></slot>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'vue-reform-control',
  data: () => ({ values: {} }),
  provide() {
    return {
      values: this.values,
      setValue: this.setValue
    };
  },
  methods: {
    setValue(name, value) {
      this.$set(this.values, name, value);
    },
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) return this.$emit('submit', this.values);
    }
  },
  components: { ValidationObserver }
};
</script>
