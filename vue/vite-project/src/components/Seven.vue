<!-- ColorBox.vue -->
<template>
  <div v-seven-update-color class="color-box"></div>
</template>

<script>
export default {
  name: "ColorBox",
  directives: {
    sevenUpdateColor: {
      created(el) {
        el.style.background =
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
      },
      mounted(el) {
        el.onclick = () => {
          el.style.background =
            "#" +
            Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0");
        };
      },
    },
  },
};
</script>

<style scoped>
.color-box {
  width: 50px;
  height: 50px;
}
</style>
