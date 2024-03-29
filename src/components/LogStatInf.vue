<template>
    <div id="养殖日志统计信息">
        <div class="title">
            <h2 style="padding-top: 2%;">{{ "养殖日志统计信息" }}</h2>
        </div>
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
#养殖日志统计信息 {
    width: 100%;
    height: 69%;
    background-color: var(--component-bg-color);
    border-top: 1px solid var(--component-border-color);
    position: absolute;
    top: 0;
}

.title {
    height: 15%;
    width: 100%;
}

.table-container {
    width: 96%;
    padding-left: 2%;
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