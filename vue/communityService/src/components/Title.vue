<script setup>
defineProps(["title"]);
</script>

<template>
  <header>{{ title }}</header>
</template>

<style scoped>
header {
  display: flex;
  background: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
  line-height: 50px;
}
</style>
