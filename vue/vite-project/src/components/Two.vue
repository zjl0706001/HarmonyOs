<template>
  <div>{{ name.toUpperCase() }}</div>
</template>

<script>
export default {
  data() {
    return { name: "vue" };
  },
};
</script>

<style scoped>
div {
  margin: 10px auto;
}
</style>
