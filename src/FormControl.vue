<template>
  <validation-observer v-slot="{ handleSubmit, ...rest }" tag="div">
    <form @submit.prevent="handleSubmit(submit)">
      <slot v-bind="{ values, setValue, ...rest }"></slot>
    </form>
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
    submit() {
      this.$emit('submit', this.values);
    }
  },
  components: { ValidationObserver }
};
</script>
