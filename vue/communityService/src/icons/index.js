import {
  Lock,
  DataBoard,
  Document,
  Promotion,
  Eleme,
  Tools,
  Histogram,
  ElementPlus,
  Grid,
  Aim,
  Menu,
  Warning,
  Failed,
  List,
  Files,
  DocumentCopy,
  Avatar,
  CopyDocument,
  Sunset,
  Link,
  Setting,
  Coin,
} from "@element-plus/icons-vue";
const iconMap = {
  Lock,
  DataBoard,
  Document,
  Promotion,
  Eleme,
  Tools,
  Histogram,
  ElementPlus,
  Grid,
  Aim,
  Menu,
  Warning,
  Failed,
  List,
  Files,
  DocumentCopy,
  Avatar,
  CopyDocument,
  Sunset,
  Link,
  Setting,
  Coin,
};
export const getIcon = (iconName) => {
  return iconMap[iconName];
};
