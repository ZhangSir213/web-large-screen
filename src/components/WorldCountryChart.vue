<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { useEcharts } from "../hooks/useEcharts";
import geo from "../json/geo";
import mapping from "../json/mapping";
import data from "../json/data";


const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions, echarts } = useEcharts(chartRef as Ref<HTMLDivElement>);
echarts.registerMap("WorldCountry", geo.WorldCountryGeo);



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
  geo: {
    map: 'WorldCountry',
    // ...
    regions: [
    ],
    // 添加 'New York' 和 'Beijing' 的坐标
    nameMap: {
      '纽约': [-74.0059, 40.7128],
      '北京': [116.4074, 39.9042]
    }
  },
  series: [
    {
      name: "世界地图",
      type: "map",
      coordinateSystem: "geo",
      zlevel: 1,
      geoIndex: 0,
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
    },
    {
      name: '从纽约到北京',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        color: '#a6c84c',
        width: 0,
        curveness: 0.2
      },
      data: [
        {
          fromName: '北京',
          toName: '纽约',
          coords: [['-74.0059', '40.7128'], ['116.4074', '39.9042']]
        }
      ],
      map: 'WorldCountry',
      regions: [],
      nameMap: {
        '纽约': [-74.0059, 40.7128],
        '北京': [116.4074, 39.9042]
      }
    }
  ],
};

onMounted(() => {
  setOptions(options);
});
</script>

<style scoped>
.chart {
  width: 124%;
  height: 120%;
  margin-left: -12%;
  margin-top: -5%;
}
</style>
