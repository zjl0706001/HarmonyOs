<template>
  <Title title="用户列表" />
  <Select :inputs="inputs" :getData="fetchNotices" :selectData="selectData" />
  <Show
    title="用户信息"
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
  addBannerImg,
  getUsers,
  deleteNotice,
  updateNotice,
} from "../../../api/user.js";
import { useRouter } from "vue-router";
const inputs = ref([
  {
    label: "用户名",
  },
]);
// 状态管理
const titleHead = ref([
  { label: "序号", prop: "id", type: "text" },
  { label: "用户名", prop: "userName", type: "text" },
  { label: "昵称", prop: "nickName", type: "text" },
  { label: "头像", prop: "avatar", type: "img" },
  { label: "性别", prop: "gender", type: "text" },
  { label: "地址", prop: "address", type: "text" },
  { label: "积分", prop: "score", type: "text" },
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
  const res = await getUsers();
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
    await addBannerImg(body);
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
