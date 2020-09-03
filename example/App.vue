<template>
  <form-control>
    <form-field
      name="name"
      label="Name"
      rules="required"
      placeholder="Name"
    />
  </form-control>
</template>

<script>
import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { FormControl, FormField } from '../src';

extend('required', { ...required });

export default {
  components: { FormControl, FormField },
}
</script>
