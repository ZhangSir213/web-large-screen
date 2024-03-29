<template>
    <div id="养殖系统监控分析组件">
        <div class="title">{{ "养殖系统监控分析" }}</div>
    </div>
</template>


<script lang="ts" setup>

import data from "../json/data";
let _data = data.EffectAnalysis;

</script>


<style scoped>
#养殖系统监控分析组件 {
    height: 80%;
    width: 100%;
    background-color: var(--component-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>