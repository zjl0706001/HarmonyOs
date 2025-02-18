<script>
export default {};
</script>

<template>
  <div @click="console.log(111)">
    <div @click.stop="console.log(222)"></div>
  </div>
</template>

<style scoped>
div {
  width: 50px;
  height: 50px;
  background: #ff9000;
}
</style>
