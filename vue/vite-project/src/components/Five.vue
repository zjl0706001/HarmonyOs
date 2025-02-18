<script>
export default {
  data() {
    return {};
  },
  methods: {
    update(e) {
      e.target.classList.toggle("a");
    },
  },
};
</script>

<template>
  <div @click="update"></div>
</template>

<style scoped>
div {
  width: 50px;
  height: 50px;
  background: #ff9000;
}
.a {
  background: antiquewhite;
}
</style>
