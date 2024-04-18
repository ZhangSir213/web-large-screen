<template>
    <div id="养殖样本情况统计信息-1">
        <div style="height: 5%;"></div>
        <table class="border-table">
            <tbody class="tbody">
                <tr v-for="d in _data" v-bind:key="d.sorts">
                    <td class="col-element">{{ d.name }}</td>
                    <td class="col-element">{{ d.value }}</td>
                </tr>
            </tbody>
        </table>
        <div style="height: 5%;"></div>
    </div>
</template>

<script lang="ts" setup>
import data from "../json/data";
let _data = data.EffectGeneral;
</script>

<style scoped>
#养殖样本情况统计信息-1 {
    position: absolute;;
    bottom: 1%;
    width: 100%;
    height: 29%;
    background-color: var(--component-bg-color);
}

.border-table {
    border-collapse: collapse;
}

.col-element {
    padding: 0.25rem;
    text-align: left;
    color: var(--font-color-chart-1);
    font-size: 1.125rem;
}
</style>