<template>
  <li>{{ val }}</li>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      default: "",
    },
  },
};
</script>
