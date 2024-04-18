<template>
  <div id="fullppage">
    <div style="width: 99%;">
      <!--标题行-->
      <div id="topline">
        <div id="数字替身-围框"></div>
        <div id="数字替身-标题">{{ "“数字替身”养殖系统" }}</div>
      </div>
      <!-- 主体部分 -->
      <div id="UpperBox">
        <div id="左侧状态栏">
          <div id="养殖日志统计信息">
            <LogStatInf />
          </div>
          <div id="样本数量统计-饼图">
            <SamplePieGraph />
          </div>
        </div>
        <div id="中间地图框">
          <world-country-chart />
        </div>
        <div id="右侧状态栏">
          <BreedLogBar />
        </div>
      </div>
      <div id="LowerBox">
        <PCStateBar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorldCountryChart from './components/WorldCountryChart.vue';
import LogStatInf from './components/LogStatInf.vue';
import SamplePieGraph from './components/SamplePieGraph.vue';
import PCStateBar from './components/PCStateBar.vue';
import BreedLogBar from './components/BreedLogBar.vue';
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}

#fullppage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


#topline {
  width: 100%;
  height: 180px;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: relative;
}

#UpperBox {
  height: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#LowerBox {
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: var(--component-bg-color); */
}

#左侧状态栏 {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

#中间地图框 {
  height: 100%;
  width: 60%;
  position: relative;
}

#右侧状态栏 {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

#数字替身-标题 {
  width: 100%;
  justify-content: center;
  font-size: 3rem;
  color: var(--title-color-head-1);
  font-weight: bold;
  position: absolute;
  top: 10%;
}

#样本数量统计-饼图 {
  position: absolute;
  bottom: 2%;
  width: 100%;
  height: 44%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--component-bg-color);
  border-bottom: 1px solid var(--component-border-color);
}

#养殖日志统计信息 {
  width: 100%;
  height: 52%;
  background-color: var(--component-bg-color);
  border-top: 1px solid var(--component-border-color);
  position: absolute;
  top: 0;
}
</style>
