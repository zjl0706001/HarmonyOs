import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vant/lib/index.css";
import router from "./router/index.js";
import { Audio, Progress } from "@nutui/nutui";
import Cookies from "js-cookie";
import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Col,
  Row,
  Image as VanImage,
  Icon,
  Swipe,
  SwipeItem,
  List,
  Cell,
  Slider,
  Sticky,
  Tab,
  Tabs,
  Rate,
  Popup,
  Field,
  CellGroup,
  Form,
} from "vant";
createApp(App)
  .use(router)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Col)
  .use(Row)
  .use(VanImage)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(List)
  .use(Cell)
  .use(Slider)
  .use(Sticky)
  .use(Tab)
  .use(Tabs)
  .use(Rate)
  .use(Popup)
  .use(Field)
  .use(CellGroup)
  .use(Form)
  .use(Audio)
  .use(Progress)
  .mount("#app");
Cookies.set(
  "sign",
  "131083473|hb-api|1739106423|8E99835612E9D45125A28071130EC5E9",
);
Cookies.set("user_id", "131083473");
