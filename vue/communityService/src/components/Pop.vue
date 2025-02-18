<script setup>
import { ref, watch, reactive, onMounted } from "vue";

const { dialogFormVisibleF, closePop, formHead, onSubmit, isAdd, datas } =
  defineProps({
    dialogFormVisibleF: Boolean,
    closePop: Function,
    formHead: Object,
    onSubmit: Function,
    isAdd: Number,
    datas: Array,
  });
const form = reactive({});
const dialogFormVisible = ref(false);
onMounted(() => {
  formHead.forEach((item) => {
    form[item.prop] = "";
  });
});
watch(
  () => datas,
  () => {
    console.log(datas);
    form.name = datas.name;
    form.desc = datas.desc;
    form.coverImage = datas.coverImage;
  },
);
watch(
  () => dialogFormVisibleF,
  (newValue) => {
    dialogFormVisible.value = newValue;
  },
);
const okBtn = () => {
  closePop();
  onSubmit(form, isAdd);
  formHead.forEach((item) => {
    form[item.prop] = "";
  });
};
</script>

<template>
  <el-dialog
    @close="closePop"
    v-model="dialogFormVisible"
    title="修改信息"
    width="500"
  >
    <el-form :model="form">
      <el-form-item
        v-for="(item, index) in formHead"
        :key="index"
        :label="item.title"
        label-width="50px"
      >
        <el-input v-model="form[item.prop]" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closePop">取消</el-button>
        <el-button type="primary" @click="okBtn"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
