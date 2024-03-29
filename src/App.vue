<template>
  <div id="fullppage">
    <div style="width: 99%; border:1px solid red">
      <!--标题行-->
      <div id="topline">
        <h1>{{ "数字替身养殖系统" }}</h1>
      </div>
      <!-- 主体部分 -->
      <div id="UpperBox">
        <div id="UpperMiddle">
          <world-country-chart />
        </div>
        <div id="UpperRight">
          <SystemNumber />
          <log-stat-inf />
          <SampleInfoCount />
        </div>
      </div>
      <div class="LowerBox">
        <PCStateBar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorldCountryChart from './components/WorldCountryChart.vue';
import SystemNumber from './components/SystemNumber.vue';
import LogStatInf from './components/LogStatInf.vue';
import SampleInfoCount from './components/SampleInfoCount.vue';
import PCStateBar from './components/PCStateBar.vue';
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}

#topline {
  width: 100%;
  height: 120px;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
}

#fullppage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#UpperBox {
  height: 1400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#UpperMiddle {
  height: 100%;
  width: 75%;
  position: relative;

}

#UpperRight {
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

#LowerBox {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--component-bg-color);
}
</style>
