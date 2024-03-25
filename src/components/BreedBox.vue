<template>
    <div class="borderForBreedbox">
        <div class="title">
            {{ "养殖系统概况" }}</div>
        <div class="table-container">
            <table class="bordered-table">
                <tbody>
                    <tr v-for="(data, index) in _data" :key="index">
                        <td class="col-1">{{ data.name }}</td>
                        <td class="col-2">{{ data.base }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup name="Breedbox">

let _data: { name: string, base: string }[] = [
    { name: "复现样本总数", base: "100" },
    { name: "复现样本所属国家", base: "美国、印度、越南" },
    { name: "监控组件个数", base: "9" },
    { name: "复现场景个数", base: "6" },
    { name: "模拟受害终端个数", base: "3" },
    { name: "模拟C2个数", base: "3" },
    { name: "模拟攻击平台个数", base: "2" },
    { name: "模拟中间设备个数", base: "1" },
]
</script>

<style scoped>
.borderForBreedbox {
    position: relative;
    width: 28.125rem;
    /* width: 18.75rem; */
    /* 300px */
    height: 14.875rem;
    background-color: #1d1e24dc;
    /* 在这里调整 监控分析组件运行概况 的样式 */
    border-radius: 0.625rem;
    /* box-shadow: 0 0 1.25rem #18191f; */
}

.title {
    position: absolute;
    align-self: flex-start;
    top: 0.625rem;
    left: 0.625rem;
    font-size: 1.25rem;
    color: aliceblue;
}

.table-container {
    position: absolute;
    top: 2.75rem;
    left: 0.625rem;
    width: 26.875rem;
    /* width: 17.5rem; */
    height: 12.125rem;
    overflow: auto;
}

.bordered-table {
    border-collapse: collapse;
    font-size: 0.9em;
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
    align-self: left;
    width: 0.375rem;
}

.table-container::-webkit-scrollbar-track {
    background: transparent;
}

.table-container::-webkit-scrollbar-thumb {
    background: #2d2e34bc;
    border-radius: 0.375rem;
}

.table-container::-webkit-scrollbar-thumb:hover {
    background: #dbe18e88;
}
</style>