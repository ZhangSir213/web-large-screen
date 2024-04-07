<template>
    <div id="日志信息展示栏">
        <div id="日志信息滑动条">
            <BreedLogItem v-for="d in _data" :id="d.id" :value="d.value" :timestamp="d.timestamp"
                :lasting_time="d.lasting_time" :group="d.group" :package="d.package" :machine="d.machine"
                :status="d.status"></BreedLogItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BreedLogItem from "./BreedLogItem.vue";
import { ref } from "vue";
import data from "../json/data";
let _data = ref(data.BreedLog);
</script>

<style scoped>
#日志信息展示栏 {
    overflow: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 98%;
    border-top: 1px solid var(--component-border-color);
    border-bottom: 1px solid var(--component-border-color);
}

#日志信息滑动条 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;
}

#日志信息展示栏::-webkit-scrollbar {
    width: 30px;
}

#日志信息展示栏::-webkit-scrollbar-track {
    background: #f1f1f137;
}

#日志信息展示栏::-webkit-scrollbar-thumb {
    background: #888;
}

#日志信息展示栏::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
