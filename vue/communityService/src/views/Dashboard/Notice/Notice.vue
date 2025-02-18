<script setup>
import {
  addNotice,
  deleteNotice,
  getNoticeInfo,
  noticesList,
  updateNotice,
} from "../../../api/user.js";
import Show from "../../../components/Show.vue";
import Title from "../../../components/Title.vue";
import Select from "../../../components/Select.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// 状态管理
const titleHead = ref([
  { label: "序号", prop: "id", type: "text" },
  { label: "名字", prop: "name", type: "text" },
  { label: "主图", prop: "coverImage", type: "img" },
  { label: "简介", prop: "desc", type: "text" },
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
  const res = await noticesList();
  tableData.value = res.data.data;
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
const inputs = ref([{ label: "名字" }]);
const selectData = (v1) => {
  tableData.value = tableData.value.filter((item) => item.name.includes(v1));
};
</script>

<template>
  <Title title="公告管理" />
  <Select :inputs="inputs" :getData="fetchNotices" :selectData="selectData" />
  <Show
    title="公告"
    :titleHead="titleHead"
    :formHead="formHead"
    :tableData="tableData"
    :getData="fetchNotices"
    :onSubmit="onSubmit"
    :handleDelete="handleDelete"
  />
</template>

<style scoped></style>
