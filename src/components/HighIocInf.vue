<template>
    <div class="title">{{ "养殖生产高价值IoC信息" }}</div>
    <div class="table-container">
        <table class="bordered-table">
            <thead>
                <tr>
                    <th>count</th>
                    <th>type</th>
                    <th>IoC</th>
                    <th>time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in _data" v-bind:key="d.count">
                    <td class="col-element">{{ d.count }}</td>
                    <td class="col-element">{{ d.type }}</td>
                    <td class="col-element">{{ d.IoC }}</td>
                    <td class="col-element">{{ d.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup name="HighIocInf">
let _data: { count: string, type: string, IoC: string, time: string, }[] = [
    {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    }, {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    }, {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    }, {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    }, {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    }, {
        count: "1", type: "url", IoC: "https://61pldd-cdn.net/dnv41", time: "2024-01-26 02:08:20",
    },]
</script>

<style scoped>
.title {
    padding-top: 0.75rem;
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
    width: 10%;
}

.bordered-table td:nth-child(2) {
    width: 10%;
}

.bordered-table td:nth-child(3) {
    width: 40%;
}

.bordered-table td:nth-child(4) {
    width: 40%;
}
</style>