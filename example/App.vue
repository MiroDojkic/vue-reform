<template>
  <re-form @submit="handleSubmit" @invalid="handleInvalid">
    <form-field
      name="name"
      label="Name"
      rules="required"
      placeholder="Name" />
    <button type="submit">Submit</button>
  </re-form>
</template>

<script>
import { FormField, Form as ReForm } from '../src';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);

export default {
  methods: {
    handleSubmit(values) {},
    handleInvalid(errors, values) {}
  },
  components: { ReForm, FormField }
};
</script>
