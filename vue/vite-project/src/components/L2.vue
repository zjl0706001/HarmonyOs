<template>
  <button @click="f1">--</button>
</template>

<script>
import { emitter } from "./eventBus";

export default {
  methods: {
    f1() {
      emitter.emit("updateNum");
    },
  },
};
</script>

<style scoped></style>
