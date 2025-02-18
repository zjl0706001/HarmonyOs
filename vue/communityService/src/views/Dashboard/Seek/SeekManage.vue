<template>
  <Title title="资讯管理" />
  <Select :inputs="inputs" :getData="fetchNotices" :selectData="selectData" />
  <Show
    title="咨询"
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
import {
  deleteNotice,
  getDiscuss,
  getForums,
  updateNotice,
} from "../../../api/user.js";
import { useRouter } from "vue-router";
const inputs = ref([
  {
    label: "名字",
  },
]);
// 状态管理
const titleHead = ref([
  { label: "序号", prop: "id", type: "text" },
  { label: "主题", prop: "name", type: "text" },
  { label: "板块", prop: "name", type: "text" },
  { label: "发布人", prop: "name", type: "text" },
  { label: "主图", prop: "coverImage", type: "img" },
  { label: "是否审核", prop: "name", type: "text" },
  { label: "描述", prop: "desc", type: "text" },
  { label: "内容", prop: "name", type: "text" },
  { label: "发布时间", prop: "name", type: "text" },
  { label: "操作", prop: "handle", type: "btn" },
]);
const tableData = ref([]);
const formHead = ref([
  { prop: "name", title: "名字", value: "" },
  { prop: "id", title: "分类", value: "" },
  { prop: "url", title: "图片", value: "" },
  { prop: "content", title: "简介", value: "" },
  { prop: "link", title: "链接", value: "" },
]);
const router = useRouter();

// 获取公告数据
const fetchNotices = async () => {
  const res = await getForums();
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
    await getDiscuss(body);
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
