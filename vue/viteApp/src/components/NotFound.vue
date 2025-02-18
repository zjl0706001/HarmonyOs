<template>
  <h1>{{ msg }}</h1>
  <div>
    <el-button>{{ time }}s后自动返回</el-button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const msg = "404 Not Found";
const time = ref(5);
const router = useRouter();
const timer = setInterval(() => time.value--, 1000);
setTimeout(() => {
  router.push("/Login");
  clearInterval(timer);
  // router.go(0);
}, 5000);
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 10vh;
}
div {
  text-align: center;
  margin-top: 10vh;
}
</style>
