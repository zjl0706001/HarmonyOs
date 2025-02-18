<script setup>
import { onMounted, ref } from "vue";
import getData from "../../../api/hot.js";

const datas = ref([]);
onMounted(async () => {
  const ids = Array.from({ length: 40 }, (_, i) => 100000 + i);
  const dataPromises = ids.map((id) => getData(id));
  await Promise.all(dataPromises).then((res) => {
    datas.value = res.map((item) => {
      return {
        title: item.data.title,
        news: item.data.data,
      };
    });
  });
});
</script>

<template>
  <div class="box">
    <el-card
      shadow="always"
      v-for="item in datas"
      :key="item.title"
      style="max-width: 480px"
    >
      <template #header>
        <div class="card-header">
          <span>{{ item.title }}</span>
        </div>
      </template>
      <ul class="item-body">
        <li
          v-for="(o, index) in item.news"
          :key="o.link"
          :class="{
            first: index === 0,
            second: index === 1,
            third: index === 2,
          }"
        >
          <a :href="o.link" class="text item">{{ o.title }}</a>
        </li>
      </ul>
      <template #footer>刷新</template>
    </el-card>
  </div>
</template>

<style scoped>
.box {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.item-body {
  height: 300px;
  overflow-y: auto;
}
.item-body li {
  counter-increment: item;
  list-style: none;
  padding: 8px;
  margin-bottom: 5px;
  position: relative;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item-body li a {
  color: #000000;
}
.item-body li::before {
  content: counter(item);
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  border-radius: 10%;
  display: inline-block;
  margin-right: 10px;
}

.item-body li.first::before {
  background-color: #ff4d4d;
}
.item-body li.second::before {
  background-color: #ffcc00;
}
.item-body li.third::before {
  background-color: #4da6ff;
}
.item-body li:not(.first):not(.second):not(.third)::before {
  background-color: #cccccc;
}
.item-body li a {
  position: relative;
}
.item-body li a::before {
  content: "";
  height: 4px;
  background-image: linear-gradient(to right, #df2900, #dd9281);
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  transition: width 0.5s;
}
.item-body li a:hover::before {
  width: 100%;
}
.item-body li a:hover {
  font-weight: bold;
  font-size: 20px;
}
</style>
