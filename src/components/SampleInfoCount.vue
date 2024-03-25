<template>
    <div class="table-container">
        <table class="border-table">
            <tbody class="tbody">
                <tr v-for="d in _data" v-bind:key="d.sorts">
                    <td class="col-element">{{ d.name }}</td>
                    <td class="col-element">{{ d.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>

import data from "../json/data";
let _data = data.EffectGeneral;
</script>

<style scoped>
.table-container {
    width: 100%;
    height: auto;
    padding: 0.25rem;
    border-radius: 5%;
    background-color: #7c7c7c50;
}

.border-table {
    border-collapse: collapse;
    width: 100%;
    height: 100%;
}

.col-element {
    padding: 0.25rem;
    text-align: left;
    color: lightcyan;
    font-size: 1.125rem;
}
</style>