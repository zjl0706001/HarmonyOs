import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

let vm = createApp(App);

vm.directive("updateColor", {
  mounted(ele) {
    ele.style.background =
      "#" +
      Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 16).toString(16),
      ).join("");
  },
});
vm.mount("#app");
