<script>
export default {
  methods: {
    update() {
      this.name = this.$refs.input.value;
      this.$refs.input.value = "";
    },
  },
  data() {
    return { name: "张三" };
  },
};
</script>

<template>
  <div>{{ name }}</div>
  <div>
    <input ref="input" type="text" />
    <button @click="update">修改</button>
  </div>
</template>

<style scoped></style>
