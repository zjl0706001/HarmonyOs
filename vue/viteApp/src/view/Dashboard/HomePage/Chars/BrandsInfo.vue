<template>
  <div class="chart-container" ref="chartContainer">
    <div v-if="showLongPressTip" class="long-press-tip">长按提示</div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { getBrandsInfo } from "../../../../api/car.js";

export default {
  name: "BrandsInfo",
  setup() {
    const chartContainer = ref(null);
    const chart = ref(null);
    let myChart = null;
    const showLongPressTip = ref(false);

    // 获取品牌数据

    const initChart = async () => {
      myChart = echarts.init(chart.value);

      const brandData = await getBrandsInfo();

      const xData = brandData.map((item) => item.品牌);
      const yData数量 = brandData.map((item) => item.数量);
      const yData平均官方价格 = brandData.map((item) => item.平均官方价格);
      const yData平均售价 = brandData.map((item) => item.平均售价);

      const option = {
        title: {
          text: "二手车品牌信息统计",
          left: "center",
          top: 20, // 增加与顶部的间距
          itemGap: 25, // 增加主标题和副标题之间的间距
          textStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#4a90e2",
          },
          // subtext: "展示各品牌二手车的数量及价格信息",
          subtextStyle: {
            fontSize: 14,
            color: "#666",
            // 移除 marginTop，因为这是无效属性
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["品牌数量", "平均官方价格", "平均售价"],
          top: 60, // 调整图例的位置，确保与标题有足够的间距
          textStyle: {
            color: "#333",
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "60", // 为了给 dataZoom 留出空间
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: xData,
          axisLabel: {
            interval: 0, // 全部显示标签
            rotate: 45, // 旋转角度防止重叠
            color: "#555",
          },
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            position: "left",
            axisLabel: {
              color: "#555",
            },
            axisLine: {
              lineStyle: {
                color: "#ccc",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#eee",
              },
            },
          },
          {
            type: "value",
            name: "价格 (万元)",
            position: "right",
            axisLabel: {
              color: "#555",
              formatter: "{value} 万元",
            },
            axisLine: {
              lineStyle: {
                color: "#ccc",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            show: true,
            start: 0,
            end: 20,
            xAxisIndex: [0],
            bottom: 20,
            backgroundColor: "#f4f4f4",
            borderColor: "#ccc",
            fillerColor: "rgba(135, 206, 235, 0.4)",
            handleIcon:
              "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z", // 添加 'path://' 前缀
            handleSize: "120%",
          },
          {
            type: "inside",
            start: 0,
            end: 20,
            xAxisIndex: [0],
            zoomLock: true, // 锁定滑块范围
          },
        ],
        series: [
          {
            name: "品牌数量",
            type: "bar",
            data: yData数量,
            yAxisIndex: 0,
            itemStyle: {
              color: "#73C0DE",
              borderRadius: [4, 4, 0, 0], // 替换为 borderRadius
            },
          },
          {
            name: "平均官方价格",
            type: "line",
            data: yData平均官方价格,
            yAxisIndex: 1,
            smooth: true,
            lineStyle: {
              color: "#5470C6",
              width: 2,
            },
            itemStyle: {
              color: "#5470C6",
            },
          },
          {
            name: "平均售价",
            type: "line",
            data: yData平均售价,
            yAxisIndex: 1,
            smooth: true,
            lineStyle: {
              color: "#EE6666",
              width: 2,
            },
            itemStyle: {
              color: "#EE6666",
            },
          },
        ],
      };

      myChart.setOption(option);

      // 初始化鼠标滚轮事件
      setupMouseWheelControl();

      // 调整图表大小
      window.addEventListener("resize", myChart.resize);
    };

    // 设置鼠标滚轮控制滑块缩放
    const setupMouseWheelControl = () => {
      chartContainer.value.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault(); // 阻止页面滚动

          const dataZoom = myChart.getOption().dataZoom[0];
          const currentStart = dataZoom.start;
          const currentEnd = dataZoom.end;
          const currentWindow = currentEnd - currentStart;
          const center = (currentStart + currentEnd) / 2;

          // 定义缩放比例，例如每次滚动缩放10%
          const zoomStep = 10; // 10%

          let newWindow;
          if (event.deltaY < 0) {
            // 向上滚动，缩小窗口（放大）
            newWindow = currentWindow - zoomStep;
          } else {
            // 向下滚动，扩大窗口（缩小）
            newWindow = currentWindow + zoomStep;
          }

          // 设置最小和最大窗口大小
          const minWindow = 5; // 最小5%
          const maxWindow = 100; // 最大100%

          // 限制新窗口大小
          newWindow = Math.max(newWindow, minWindow);
          newWindow = Math.min(newWindow, maxWindow);

          // 计算新的 start 和 end，保持中心不变
          let newStart = center - newWindow / 2;
          let newEnd = center + newWindow / 2;

          // 处理边界情况
          if (newStart < 0) {
            newStart = 0;
            newEnd = newWindow;
          }
          if (newEnd > 100) {
            newEnd = 100;
            newStart = 100 - newWindow;
          }

          myChart.setOption({
            dataZoom: [
              {
                start: newStart,
                end: newEnd,
              },
            ],
          });
        },
        { passive: false }, // 设置 passive 为 false 以便调用 preventDefault
      );
    };

    // 清理图表
    const disposeChart = () => {
      if (myChart) {
        window.removeEventListener("resize", myChart.resize);
        myChart.dispose();
      }
    };

    onMounted(() => {
      initChart();
    });

    onBeforeUnmount(() => {
      disposeChart();
    });

    return {
      chartContainer,
      chart,
      showLongPressTip,
    };
  },
};
</script>

<style scoped>
.chart-container {
  width: 96%;
  height: 600px;
  position: relative;
  touch-action: pan-y; /* 允许垂直滚动，防止水平手势被阻止 */
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
}

.chart {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.long-press-tip {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  z-index: 10;
  pointer-events: none;
  font-size: 14px;
  font-weight: bold;
}
</style>
