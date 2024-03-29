<template>
  <div id="fullppage">
    <div style="width: 99%; border:1px solid red">
      <!--标题行-->
      <div id="topline">
        <h1>{{ "数字替身养殖系统" }}</h1>
      </div>
      <!-- 主体部分 -->
      <div id="UpperBox">
        <!--上半部分最左边的框，最上面是“1+1+4”-->
        <div id="UpperLeft">
          <system-number />
          <div style="height: 1%;" />
          <!-- 用来分隔两个组件 -->
          <monitor-analysis />
        </div>
        <!--中间的大框，用来放地图-->
        <div id="UpperMiddle">
          <world-country-chart />
          <div id="Middle-LB">
            <CountPieGraph />
          </div>
        </div>
        <!--右侧的框，用来放“养殖日志系统信息”和“养殖系统覆盖国家比例图”-->
        <div id="UpperRight">
          <log-stat-inf />
          <SampleInfoCount />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemNumber from './components/SystemNumber.vue';
import WorldCountryChart from './components/WorldCountryChart.vue';
import LogStatInf from './components/LogStatInf.vue';
import SampleInfoCount from './components/SampleInfoCount.vue';
import MonitorAnalysis from './components/MonitorAnalysis.vue';
import CountPieGraph from './components/CountPieGraph.vue';
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}

#topline {
  width: 100%;
  height: 5rem;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
}

.MR-up {
  border-top: 1px solid var(--component-border-color);
  width: 100%;
  height: 28rem;
  background: var(--component-bg-color);
}

#fullppage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#UpperBox {
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#UpperLeft {
  height: 100%;
  width: 22%;
  position: relative;
}

#UpperMiddle {
  height: 100%;
  width: 56%;
  position: relative;
}

#Middle-LB {
  width: auto;
  height: auto;
  position: absolute;
  bottom: 8px;
  left: 8px;
}

#UpperRight {
  height: 100%;
  width: 22%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}
</style>
