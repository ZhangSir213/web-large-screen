<template>
    <div class="borderForMonitor">
        <div class="title">
            {{ "监控分析组件运行概况" }}</div>
        <div class="table-container">
            <table class="bordered-table">
                <tbody>
                    <tr v-for="(data, index) in _data" :key="index">
                        <td class="col-1">{{ data.name }}</td>
                        <td class="col-2">{{ data.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup name="Monitor">

let _data: { name: string, status: string }[] = [
    { name: "OsiTest", status: "√" },
    { name: "ProcDump", status: "√" },
    { name: "NetworkAnalysis", status: "√" },
    { name: "APIAnalysis", status: "√" },
    { name: "MemorySave", status: "√" },
    { name: "ProcessMemory", status: "√" },
    { name: "StaticAnalysis", status: "√" },
    { name: "BehaviorSignatures", status: "√" },
    { name: "YaraMatch", status: "√" },
]
</script>

<style scoped>
.borderForMonitor {
    position: relative;
    width: 18.75rem;
    /* 300px */
    height: 23rem;
    background-color: #1d1e24dc;
    /* 在这里调整 监控分析组件运行概况 的样式 */
    border-radius: 0.625rem;
    /* box-shadow: 0 0 1.25rem #18191f; */
}

.title {
    position: absolute;
    align-self: flex-start;
    top: 0.625rem;
    right: 0.625rem;
    font-size: 1.25rem;
    color: aliceblue;
}

.table-container {
    position: absolute;
    top: 2.75rem;
    left: 0.625rem;
    width: 17.5rem;
    height: 20.25rem;
    overflow: auto;
}

.bordered-table {
    border-collapse: collapse;
    font-size: .9em;
    width: 100%;
}

.bordered-table th {
    background-color: #f2f2f2;
}

.col-1 {
    width: 50%;
    border: 1px solid #cccccc4e;
    border-top: 1px solid #cccccc4e;
    border-bottom: none;
    border-left: none;
    /* 移除左边框 */
    border-right: none;
    /* 移除右边框 */
    text-align: left;
    padding: 0.5rem;
    color: #dae0ea;
    cursor: pointer;
}

.col-2 {
    border: 1px solid #cccccc4e;
    border-top: 1px solid #cccccc4e;
    border-bottom: none;
    border-left: none;
    /* 移除左边框 */
    border-right: none;
    /* 移除右边框 */
    text-align: right;
    padding: 0.5rem;
    color: #dce18ee9;
}

.table-container::-webkit-scrollbar {
    width: 0.375rem;
}

.table-container::-webkit-scrollbar-track {
    background: transparent;
}

.table-container::-webkit-scrollbar-thumb {
    background: #dbe18e22;
    border-radius: 0.375rem;
}

.table-container::-webkit-scrollbar-thumb:hover {
    background: #dbe18e88;
}
</style>