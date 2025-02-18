<template>
  <div class="chart-wrapper">
    <div class="chart-container" ref="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import axios from "axios";
import chinaGeoJSON from "/src/assets/china.json";

// 注册中国地图
echarts.registerMap("china", chinaGeoJSON);

// 定义地图数据的引用
const mapData = ref([]);

// 图表 DOM 引用
const chart = ref(null);
let myChart = null;

// 缩放阈值
const ZOOM_THRESHOLD = 1.5; // 可根据需要调整

// 当前缩放比例
let currentZoom = 1;

// 节流相关
let throttleTimeout = null;

// 获取城市数据的函数
const getCityNumber = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/cars/cityNumber",
    );

    // Debugging logs
    const responseData = Array.isArray(response.data)
      ? response.data
      : response.data.data;

    mapData.value = responseData.map((item) => {
      const cityName = `${item.城市}市`;
      let quantityStr = item.数量 * 1;
      if (typeof quantityStr === "string") {
        quantityStr = quantityStr.replace(/[\s,]/g, "").replace(/[^\d.]/g, "");
      }
      const numericValue = Number(quantityStr);
      return {
        name: cityName,
        value: isNaN(numericValue) ? 0 : numericValue,
      };
    });
    updateChart(); // 数据获取完成后更新图表
  } catch (error) {
    console.error("获取城市数据失败:", error);
    // 可以在这里添加用户提示或备用数据
  }
};

// 初始化图表
const initChart = () => {
  if (chart.value) {
    myChart = echarts.init(chart.value);

    const option = {
      backgroundColor: "#f0f2f5", // 背景色与容器一致
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}",
        backgroundColor: "rgba(50,50,50,0.7)",
        textStyle: {
          color: "#fff",
        },
      },
      visualMap: {
        type: "piecewise",
        show: true,
        splitList: [
          { start: 500, end: 600 },
          { start: 400, end: 500 },
          { start: 300, end: 400 },
          { start: 200, end: 300 },
          { start: 100, end: 200 },
          { start: 0, end: 100 },
        ],
        color: [
          "#5475f5",
          "#9feaa5",
          "#85daef",
          "#74e2ca",
          "#e6ac53",
          "#9fb5ea",
        ],
        itemWidth: 12,
        itemHeight: 12,
        orient: "vertical",
        left: "right", // 将 visualMap 放置在右侧
        top: "center",
        textStyle: {
          color: "#000",
        },
      },
      geo: {
        id: "chinaGeo", // 设置 geo 组件的 ID
        map: "china",
        roam: true,
        label: {
          show: false, // 默认不显示标签
          color: "#333",
          fontSize: 12,
        },
        emphasis: {
          label: {
            // 使用 emphasis.label 代替 label.emphasis
            show: true, // 悬停时显示标签
          },
          itemStyle: {
            areaColor: "#1bc1ad",
            borderColor: "blue",
          },
        },
      },
      series: [
        {
          type: "map",
          map: "china",
          geoIndex: 0, // 关联到 geo 组件
          label: {
            show: false, // 默认不显示标签
            color: "#333",
            fontSize: 12,
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
            areaColor: "#ddd",
          },
          emphasis: {
            itemStyle: {
              areaColor: "#1bc1ad",
              borderColor: "blue",
            },
            label: {
              // emphasis.label 替代 label.emphasis
              show: true, // 悬停时显示标签
            },
          },
          data: mapData.value,
          animation: true, // 启用动画
          animationDuration: 1000,
          animationEasing: "cubicOut",
        },
      ],
      animationDurationUpdate: 1000,
      animationEasingUpdate: "cubicOut",
    };

    myChart.setOption(option, true);

    // 添加 georoam 事件监听
    myChart.on("georoam", () => {
      const geoModel = myChart.getModel();
      if (geoModel) {
        const geoComponent = geoModel.getComponent("geo", "chinaGeo");
        if (geoComponent) {
          // 获取当前缩放比例
          currentZoom = geoComponent.get("scale") || 1;
          const showLabels = currentZoom > ZOOM_THRESHOLD;

          // 节流处理
          if (throttleTimeout) {
            clearTimeout(throttleTimeout);
          }
          throttleTimeout = setTimeout(() => {
            myChart.setOption({
              series: [
                {
                  label: {
                    show: showLabels, // 根据缩放比例显示或隐藏标签
                  },
                },
              ],
            });
          }, 200); // 每200ms最多执行一次
        }
      }
    });
  }
};

// 更新图表数据
const updateChart = () => {
  if (myChart) {
    myChart.setOption({
      series: [
        {
          data: mapData.value,
        },
      ],
    });
  }
};

// 处理窗口大小变化
const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
};

// Cleanup before component is unmounted
onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose();
  }
  window.removeEventListener("resize", resizeChart);
});

// 组件挂载时初始化图表并获取数据
onMounted(() => {
  initChart();
  getCityNumber();
  window.addEventListener("resize", resizeChart);
});
</script>

<style scoped>
.chart-wrapper {
  width: 96%; /* 占满父容器宽度 */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 向上对齐 */
  padding: 20px;
  margin: 0 auto;
  background-color: #f0f2f5; /* 背景颜色 */
  min-height: 100vh; /* 满屏高度 */
}

.chart-container {
  width: 100%; /* 保持100%宽度 */
  max-width: 1600px; /* 增加最大宽度限制 */
  height: 600px;
  background: #ffffff; /* 图表背景色 */
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  overflow: hidden; /* 防止内容溢出 */
  transition: transform 0.3s ease; /* 过渡效果 */
  margin-top: 0; /* 移除向上平移 */
}
</style>
