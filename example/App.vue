<template>
  <re-form @submit="logSubmit">
    <form-field
      name="name"
      label="Name"
      rules="required"
      placeholder="Name" />
    <button type="submit">Submit</button>
  </re-form>
</template>

<script>
import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { Form as ReForm, FormField } from '../src';

extend('required', required);

export default {
  components: { ReForm, FormField },
  methods: {
    logSubmit(values) {
      console.log('Form submit successful: ', { ...values })
    }
  },
}
</script>
