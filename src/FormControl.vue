<template>
  <validation-observer
  ref="observer"
  v-slot="veeProps"
  class="reform-form-control"
  tag="div">
    <slot v-bind="{ ...veeProps, values, setValue, submit }"></slot>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'vue-reform-control',
  data() {
    return {
      values: { ...this.initialValues }
    };
  },
  props: {
    initialValues: {
      type: Object,
      default: () => ({})
    }
  },
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
    emitInvalid() {
      this.$emit('invalid', this.$refs.observer.errors, this.values);
    },
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) return this.$emit('submit', this.values);
      // TODO: emit invalid after observer's state is set.
      // vee-validate has a delay between resolved validate promise and
      // errors being set on the observer. Timeout accounts for that.
      setTimeout(this.emitInvalid, 50);
    }
  },
  components: { ValidationObserver }
};
</script>
