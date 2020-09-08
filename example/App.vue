<template>
  <vue-reform @submit="handleSubmit" @invalid="handleInvalid">
    <vue-reform-field
      name="name"
      label="Name"
      rules="required"
      placeholder="Name" />
    <button type="submit">Submit</button>
  </vue-reform>
</template>

<script>
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);

export default {
  methods: {
    handleSubmit(values) {},
    handleInvalid(errors, values) {}
  }
};
</script>
