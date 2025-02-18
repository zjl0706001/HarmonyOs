<template>
  <input :value="num" />
</template>

<script>
import { emitter } from "./eventBus";
export default {
  data() {
    return {
      num: 10,
    };
  },
  mounted() {
    emitter.on("updateNum", () => {
      this.num--;
    });
  },
};
</script>

<style scoped></style>
