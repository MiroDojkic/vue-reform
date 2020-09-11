<template>
  <form-control v-slot="props" v-on="$listeners" v-bind="$attrs">
    <form @submit.prevent="props.submit" class="reform-form">
      <slot v-bind="props"></slot>
    </form>
  </form-control>
</template>

<script>
import FormControl from './FormControl.vue';

export default {
  name: 'vue-reform',
  components: { FormControl }
};
</script>
