<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { useEcharts } from "../hooks/useEcharts";
import geo from "../json/geo";
import mapping from "../json/mapping";
import data from "../json/data";

/*
  组件功能：展示世界地图各个国家数据
  （与 WorldWideChart.vue 的区别在于这个是一级地图）
*/

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions, echarts } = useEcharts(chartRef as Ref<HTMLDivElement>);
echarts.registerMap("WorldCountry", geo.WorldCountryGeo);

// 世界地图选项
const options: echarts.EChartsOption = {
  toolbox: {
    show: false,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.7)",
    trigger: "item",
    formatter: "{b}: {c} 个样本",
  },
  visualMap: {
    show: false,
    min: 0,
    max: 1600, // 这个值应该是你的数据中的最大值
    calculable: true,
    inRange: {
      color: ['#e0ffff20', '#e0ffffaf'] // 颜色范围
    }
  },
  series: [
    {
      name: "世界地图",
      type: "map",
      map: "WorldCountry",
      label: {
        show: false,
        position: 'top'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "14",
        },
      },

      data: data.CountryCount,
      nameMap: mapping.CountryNameZhMapping,
    },
  ],
};

onMounted(() => {
  setOptions(options);
});
</script>

<style scoped>
.chart {
  width: 120%;
  height: 120%;
  margin-left: -10%;
  margin-top: -5%;
}
</style>
