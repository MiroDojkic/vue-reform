<template>
  <vue-reform @submit="handleSubmit" @invalid="handleInvalid">
    <vue-reform-field
      name="firstName"
      label="First name"
      rules="required"
      placeholder="First name" />
    <vue-reform-field
      name="lastName"
      label="Last name"
      rules="required"
      placeholder="Last name" />
    <vue-reform-field
      name="email"
      label="Email (optional)"
      rules="email"
      placeholder="Email" />
    <button type="submit">Submit</button>
  </vue-reform>
</template>

<script>
import { email, required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', required);
extend('email', email);

export default {
  methods: {
    handleSubmit(values) {},
    handleInvalid(errors, values) {}
  }
};
</script>
