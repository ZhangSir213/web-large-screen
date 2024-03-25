<template>
  <div style="padding: 0.5rem;">
    <!--标题行-->
    <div id="BigTitle">
      <h1 style="color:aliceblue;">数字替身养殖系统</h1>
    </div>
    <!-- 主体部分 -->
    <div id="UpperBox">
      <!--上半部分最左边的框，最上面是“1+1+4”-->
      <div id="UpperLeft">
        <system-number />
      </div>
      <!--中间的大框，用来放地图-->
      <div id="UpperMiddle">
        <world-country-chart />
        <div id="Middle-LB">
          <SampleInfoCount />
        </div>
      </div>
      <!--右侧的框，用来放“养殖日志系统信息”和“养殖系统覆盖国家比例图”-->
      <div id="UpperRight">
        <log-stat-inf />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemNumber from './components/SystemNumber.vue';
import WorldCountryChart from './components/WorldCountryChart.vue';
import LogStatInf from './components/LogStatInf.vue';
import SampleInfoCount from './components/SampleInfoCount.vue';
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}

.MR-up {
  border-top: 1px solid lightblue;
  width: 100%;
  height: 28rem;
  background: #7c7c7c50;
}

#BigTitle {
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
}

#UpperMiddle {
  height: 100%;
  width: 56%;
  border: 1px solid red;
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
}
</style>
