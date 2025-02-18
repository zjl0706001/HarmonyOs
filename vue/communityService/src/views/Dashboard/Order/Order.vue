<template>
  <Title title="订单管理" />
  <Select :inputs="inputs" :getData="fetchNotices" :selectData="selectData" />
  <Show
    title="订单列表"
    :titleHead="titleHead"
    :formHead="formHead"
    :tableData="tableData"
    :getData="fetchNotices"
    :onSubmit="onSubmit"
    :handleDelete="handleDelete"
  />
</template>
<script setup>
import Select from "../../../components/Select.vue";
import Title from "../../../components/Title.vue";
import { onMounted, ref } from "vue";
import Show from "../../../components/Show.vue";
import { useRouter } from "vue-router";
import {
  addNotice,
  deleteNotice,
  noticesList,
  updateNotice,
} from "../../../api/user.js";
const inputs = ref([
  {
    label: "用户",
  },
  {
    label: "订单状态",
  },
  {
    label: "支付状态",
  },
]);
// 状态管理
const titleHead = ref([
  { label: "序号", prop: "id", type: "text" },
  { label: "用户", prop: "name", type: "text" },
  { label: "价格", prop: "coverImage", type: "img" },
  { label: "地址", prop: "desc", type: "text" },
  { label: "详细地址", prop: "desc", type: "text" },
  { label: "订单状态", prop: "desc", type: "text" },
  { label: "支付状态", prop: "desc", type: "text" },
  { label: "操作", prop: "handle", type: "btn" },
]);
const tableData = ref([]);
const formHead = ref([
  { prop: "name", title: "名字", value: "" },
  { prop: "desc", title: "简介", value: "" },
  { prop: "coverImage", title: "主图", value: "" },
  { prop: "content", title: "内容", value: "" },
]);
const router = useRouter();

// 获取公告数据
const fetchNotices = async () => {
  // const res = await noticesList();
  // tableData.value = res.data.data;
};

// 删除公告
const handleDelete = async (row) => {
  await deleteNotice(row.id);
  router.go(0); // 刷新页面
};

// 提交表单
const onSubmit = async (body, isAdd) => {
  console.log(body, isAdd);
  if (!isAdd) {
    await addNotice(body);
    router.go(0);
  } else {
    await updateNotice(isAdd, body);
    router.go(0);
  }
};

// 初始化数据
onMounted(fetchNotices);

// Select 组件逻辑
const selectData = (v1) => {
  tableData.value = tableData.value.filter((item) => item.name.includes(v1));
};
</script>
