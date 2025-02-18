import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { Button, DropdownMenu, DropdownItem, Popup } from "vant";
import "vant/lib/index.css";

createApp(App)
  .use(router)
  .use(ElementPlus, { locale: zhCn })
  .use(Button)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Popup)
  .mount("#app");
