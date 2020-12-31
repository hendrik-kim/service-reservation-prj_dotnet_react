<template>
  <div><input @input="onInput" /></div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(evt) {
      this.$emit('termChange', evt.target.value);
    },
  },
};
</script>

<style scoped></style>
