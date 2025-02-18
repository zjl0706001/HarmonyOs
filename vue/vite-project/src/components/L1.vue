<script>
export default {
  emits: ["changeVal"],
};
</script>

<template>
  <div><button @click="$emit('changeVal')"></button></div>
</template>

<style scoped></style>
