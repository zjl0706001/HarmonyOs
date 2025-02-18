<script setup>
import B1 from "./B1.vue";
import { RefreshRight } from "@element-plus/icons-vue";
import { defineProps, ref } from "vue";
import Pop from "./Pop.vue";

// 接收父组件传递的 props
const { title, titleHead, tableData, handleDelete, onSubmit, getData } =
  defineProps({
    title: String,
    titleHead: Array,
    tableData: Array,
    formHead: Object,
    handleDelete: Function,
    onSubmit: Function,
    getData: Function,
  });
// 状态管理
const dialogFormVisible = ref(false);
const isAdd = ref(0);
const datas = ref([]);
// 刷新数据
const refreshData = () => {
  getData();
};
const addBtn = () => {
  dialogFormVisible.value = true;
  isAdd.value = 0;
};
const delBtn = (val) => {
  handleDelete(val);
};
const editBtn = (val) => {
  datas.value = val;
  dialogFormVisible.value = true;
  isAdd.value = val.id;
};
const closePop = () => {
  dialogFormVisible.value = false;
};
</script>

<template>
  <el-card
    style="width: 1470px; margin: 20px auto; border: none"
    shadow="never"
  >
    <!--  Show-title  -->
    <div style="display: flex">
      <div style="line-height: 32px; margin-left: 10px">{{ title }}</div>
      <div style="margin-left: 1150px; display: flex">
        <el-button type="primary" plain @click="addBtn"> + 新建 </el-button>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="刷新"
          placement="top"
        >
          <el-icon size="22px" style="margin: 5px 0 0 15px; cursor: pointer">
            <RefreshRight @click="refreshData" />
          </el-icon>
        </el-tooltip>

        <B1 icon="Coin" content="密度" />
        <B1 icon="Setting" content="设置" />
      </div>
    </div>
    <!--  Show-table  -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="item in titleHead"
        :key="item"
        :label="item.label"
        :width="1400 / titleHead.length"
      >
        <template #default="scope">
          <div
            v-if="item.type === 'text'"
            style="display: flex; align-items: center"
          >
            <span v-if="item.prop !== 'category'" style="margin-left: 10px">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="item.prop === 'category'" style="margin-left: 10px">
              {{ scope.row[item.prop].name }}
            </span>
          </div>
          <img
            v-if="scope.row.coverImage && item.type === 'img'"
            style="width: 100px"
            :src="
              scope.row.coverImage[0] === 'h'
                ? scope.row.coverImage
                : 'http://localhost:1337' + scope.row.coverImage
            "
            alt=""
          />
          <div v-if="item.type === 'btn'" style="display: flex">
            <el-button size="small" @click="editBtn(scope.row)">
              修改
            </el-button>
            <el-button size="small" type="danger" @click="delBtn(scope.row)">
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 弹窗 -->
  <Pop
    :isAdd="isAdd"
    :closePop="closePop"
    :dialogFormVisibleF="dialogFormVisible"
    :formHead="formHead"
    :onSubmit="onSubmit"
    :datas="datas"
  />
</template>

<style scoped></style>
