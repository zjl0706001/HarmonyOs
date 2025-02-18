<script>
export default {};
</script>

<template>
  <div><input @keydown.enter="(e) => console.log(e.target.value)" /></div>
</template>

<style scoped></style>
