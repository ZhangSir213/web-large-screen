<template>
    <div id="MR-TOP-in">
        <div class="title">{{ "养殖日志统计信息" }}</div>
        <div class="table-container">
            <table class="bordered-table">
                <thead>
                    <tr>
                        <th>养殖场景</th>
                        <th>Patchwork</th>
                        <th>Equation</th>
                        <th>Bitter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="d in _data" v-bind:key="d.sorts">
                        <td class="col-element">{{ d.sorts }}</td>
                        <td class="col-element">{{ d.Patchwork }}</td>
                        <td class="col-element">{{ d.Equation }}</td>
                        <td class="col-element">{{ d.Bitter }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import data from "../json/data";
let _data = data.EffectAnalysis;
</script>

<style scoped>
#MR-TOP-in {
    width: 100%;
    height: auto;
    background-color: #7c7c7c50;
    border-top: 1px solid lightblue;
    padding: 0.5rem;
}

.title {
    padding-top: 0.5rem;
    color: chartreuse;
    font-size: 2rem;
    font-weight: bold;
    height: 3rem;
    width: 100%;
    text-align: center;
}

.table-container {
    width: 100%;
    overflow: auto;
}

.bordered-table {
    border-collapse: collapse;
    text-align: center;
    font-size: 1.125rem;
    color: #dae0ea;
    width: 100%;
}

.bordered-table th {
    height: 2.25rem;
}

.col-element {
    height: 2.25rem;
    border-top: 1px solid #cccccc4e;
    border-bottom: none;
    border-left: none;
    border-right: none;

    text-align: center;
    color: #dae0ea;
}

.bordered-table td:nth-child(1) {
    width: 40%;
}

.bordered-table td:nth-child(2) {
    width: 20%;
}

.bordered-table td:nth-child(3) {
    width: 20%;
}

.bordered-table td:nth-child(4) {
    width: 20%;
}
</style>