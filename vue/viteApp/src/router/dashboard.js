// 新增的组件导入
export const dashRoutes = [
  {
    path: "/Dashboard/HomePage",
    name: "HomePage",
    component: () => import("../view/Dashboard/HomePage/HomePage.vue"),
    meta: { title: "首页", icon: "DataBoard", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Document",
    name: "Document",
    component: () => import("../view/Dashboard/Document/Document.vue"),
    meta: { title: "文档", icon: "Document", role: ["admin"] },
  },
  {
    path: "/Dashboard/Guide",
    name: "Guide",
    component: () => import("../view/Dashboard/Guide/Guide.vue"),
    meta: { title: "品牌页", icon: "Promotion", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Permission",
    name: "Permission",
    meta: { title: "权限测试页", icon: "Lock", role: ["admin", "user"] },
    children: [
      {
        path: "PagePermission",
        name: "PagePermission",
        component: () =>
          import("../view/Dashboard/Permission/PagePermission.vue"),
        meta: { title: "页面权限", icon: "Lock", role: ["admin", "user"] },
      },
      {
        path: "InstructionPermission",
        name: "InstructionPermission",
        component: () =>
          import("../view/Dashboard/Permission/InstructionPermission.vue"),
        meta: { title: "指令权限", icon: "Lock", role: ["admin"] },
      },
      {
        path: "UserPermission",
        name: "UserPermission",
        component: () =>
          import("../view/Dashboard/Permission/UserPermission.vue"),
        meta: { title: "角色权限", icon: "Lock", role: ["admin"] },
      },
    ],
  },
  {
    path: "/Dashboard/Icons",
    name: "Icons",
    component: () => import("../view/Dashboard/Icons/Icons.vue"),
    meta: { title: "图标", icon: "Eleme", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Components",
    name: "Components",
    component: () => import("../view/Dashboard/Components/Components.vue"),
    meta: { title: "组件", icon: "Tools", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Charts",
    name: "Charts",
    component: () => import("../view/Dashboard/Charts/Charts.vue"),
    meta: { title: "图表", icon: "Histogram", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/RouteNesting",
    name: "RouteNesting",
    component: () => import("../view/Dashboard/RouteNesting/RouteNesting.vue"),
    meta: { title: "路由嵌套", icon: "ElementPlus", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Table",
    name: "Table",
    component: () => import("../view/Dashboard/Table/Table.vue"),
    meta: { title: "Table", icon: "Grid", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/ComprehensiveExample",
    name: "ComprehensiveExample",
    children: [
      {
        path: "addCar",
        name: "addCar",
        component: () =>
          import("../view/Dashboard/ComprehensiveExample/AddCar.vue"),
        meta: { title: "添加车辆", icon: "Aim", role: ["admin"] },
      },
      {
        path: "carList",
        name: "carList",
        component: () =>
          import("../view/Dashboard/ComprehensiveExample/CarList.vue"),
        meta: { title: "车辆列表", icon: "Aim", role: ["admin", "user"] },
      },
    ],
    meta: { title: "综合实例", icon: "Aim", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Tab",
    name: "Tab",
    component: () => import("../view/Dashboard/Tab/Tab.vue"),
    meta: { title: "Tab", icon: "Menu", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/ErrorPages",
    name: "ErrorPages",
    component: () => import("../view/Dashboard/ErrorPages/ErrorPages.vue"),
    meta: { title: "错误页面", icon: "Warning", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/ErrorLogs",
    name: "ErrorLogs",
    component: () => import("../view/Dashboard/ErrorLogs/ErrorLogs.vue"),
    meta: { title: "错误日志", icon: "Failed", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Excel",
    name: "Excel",
    component: () => import("../view/Dashboard/Excel/Excel.vue"),
    meta: { title: "Excel", icon: "List", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Zip",
    name: "Zip",
    component: () => import("../view/Dashboard/Zip/Zip.vue"),
    meta: { title: "Zip", icon: "Files", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/PDF",
    name: "PDF",
    component: () => import("../view/Dashboard/PDF/PDF.vue"),
    meta: { title: "PDF", icon: "DocumentCopy", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/ChangeTheme",
    name: "ChangeTheme",
    component: () => import("../view/Dashboard/ChangeTheme/ChangeTheme.vue"),
    meta: { title: "换肤", icon: "Avatar", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Clipboard",
    name: "Clipboard",
    component: () => import("../view/Dashboard/Clipboard/Clipboard.vue"),
    meta: { title: "Clipboard", icon: "CopyDocument", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/Internationalization",
    name: "Internationalization",
    component: () =>
      import("../view/Dashboard/Internationalization/Internationalization.vue"),
    meta: { title: "国际化", icon: "Sunset", role: ["admin", "user"] },
  },
  {
    path: "/Dashboard/ExternalLink",
    name: "ExternalLink",
    component: () => import("../view/Dashboard/ExternalLink/ExternalLink.vue"),
    meta: {
      title: "外链",
      icon: "Link",
      role: ["admin", "user"],
      external: true,
    },
  },
  {
    path: "/Dashboard/Personal",
    name: "Personal",
    component: () => import("../view/Dashboard/Personal/Personal.vue"),
    meta: {
      title: "个人中心",
      icon: "Link",
      role: ["admin", "user"],
      external: true,
    },
  },
];

export const loopRoutes = (routes, role) => {
  let res = [];
  routes.forEach((item) => {
    if (item.children) {
      item.children = loopRoutes(item.children, role);
    }
    if (item.meta.role.includes(role)) res.push(item);
  });
  return res;
};
