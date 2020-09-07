<template>
  <form-control v-slot="{ submit }" @submit="logSubmit">
      <form @submit.prevent="submit">
        <form-field
          name="name"
          label="Name"
          rules="required"
          placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
  </form-control>
</template>

<script>
import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { FormControl, FormField } from '../src';

extend('required', required);

export default {
  components: { FormControl, FormField },
  methods: {
    logSubmit({ name }) {
      console.log(name)
    }
  },
}
</script>
