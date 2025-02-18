<script setup>
import { Search } from "@element-plus/icons-vue";
import {
  getTengfa,
  getSeries,
  getCarsBySeries,
  getSearch,
} from "/src/api/car.js";
import { onMounted, ref } from "vue";
const carsData = ref([]);
const gridData = ref([]);

const getTengfas = async () => {
  try {
    const res = await getTengfa();
    return res.data;
  } catch (error) {
    console.error("获取腾发数据失败:", error);
    return [];
  }
};

const data = ref({});

onMounted(async () => {
  const res = await getTengfas();
  res.forEach((item) => {
    if (!data.value[item.pinyin]) data.value[item.pinyin] = [];
    data.value[item.pinyin].push(item);
  });
  getCarsBySeries(212).then((res) => {
    carsData.value = res.data;
  });
});

// 存储所有弹出框的引用
const popovers = ref({});

// 创建弹出框的引用
const getPopoverRef = (key, index) => {
  if (!popovers.value[key]) {
    popovers.value[key] = {};
  }
  return (el) => {
    popovers.value[key][index] = el;
  };
};

// 处理弹出框内容点击事件
const handleContentClick = (key, index, row) => {
  if (popovers.value[key] && popovers.value[key][index]) {
    popovers.value[key][index].hide();
    getCarsBySeries(row.series_id).then((res) => {
      carsData.value = res.data;
      console.log(carsData.value);
    });
  }
};

// 获取车系
const get_Series = async (id) => {
  try {
    const res = await getSeries(id);
    gridData.value = res.data.map((item) => ({
      date: item.name,
      series_id: item.id,
      id: item.id,
    }));
  } catch (error) {
    console.error("获取车系列表失败:", error);
  }
};
// search
const searchValue = ref("");
const search = async () => {
  const res = await getSearch(searchValue.value);
  carsData.value = res.data;
};
</script>

<template>
  <el-container style="height: 100%">
    <el-menu
      style="width: 200px; height: 100%; overflow-y: auto"
      class="el-menu-vertical-demo"
    >
      <el-input
        v-model="searchValue"
        style="max-width: 280px; border: none"
        placeholder="搜索"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" @click="search()" />
        </template>
      </el-input>

      <el-menu-item-group v-for="(v, k) in data" :key="k" :title="k">
        <el-popover
          v-for="(item, index) in v"
          :key="`${k}-${index}-popover`"
          placement="right"
          width="240"
          trigger="click"
          :ref="getPopoverRef(k, index)"
          @show="get_Series(item.id)"
        >
          <div style="display: flex; align-items: center">
            <el-table
              style="height: 300px; overflow-y: auto; cursor: pointer"
              :data="gridData"
              @row-click="(row) => handleContentClick(k, index, row)"
            >
              <el-table-column width="214" prop="date" label="车系" />
            </el-table>
          </div>

          <template #reference>
            <el-menu-item :key="`${k}-${index}`" :index="`${k}-${index}`">
              <el-icon>
                <img :src="item.img_url" width="20" height="20" alt="" />
              </el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-popover>
      </el-menu-item-group>
    </el-menu>
    <el-container style="overflow-y: auto; height: 100%">
      <el-main class="car-list">
        <el-card
          class="car"
          v-for="car in carsData"
          :key="car.id"
          style="max-width: 240px"
        >
          <img
            class="car-image"
            :src="car.image.replace('\u0026', '&')"
            alt="Car Image"
          />
          <div class="car-info">
            <h3 class="car-title">{{ car.title }}</h3>
            <p class="car-sub-title">{{ car.sub_title }}</p>
            <div class="car-prices">
              <span class="official-price"
                >官方价格：{{ car.official_price }}</span
              >
              <span class="sh-price">优惠价格：{{ car.sh_price }}</span>
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.car-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
}

.car {
  margin: 5px auto;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  overflow: hidden;
  height: 320px;
}

.car:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.car-image {
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #ebeef5;
}

.car-info {
  padding: 10px;
}

.car-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.car-sub-title {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.car-prices {
  margin-top: 10px;
  font-size: 14px;
}

.official-price {
  display: block;
  color: #999;
  text-decoration: line-through;
}

.sh-price {
  display: block;
  color: #e74c3c;
  font-weight: bold;
}
</style>
