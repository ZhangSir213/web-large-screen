<template>
    <div id="一加一加四">
        <div class="box">
            <div class="word_in_box">{{ "分析改造模块" }}</div>
            <div class="num_in_box">{{ "1" }}</div>
        </div>
        <div class="box">
            <div class="word_in_box">{{ "投递采集模块" }}</div>
            <div class="num_in_box">{{ "1" }}</div>
        </div>
        <div class="box">
            <div class="word_in_box">{{ "沙箱集群节点" }}</div>
            <div class="num_in_box">{{ "4" }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#一加一加四 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
}

.box {
    width: 32%;
    height: 100%;
    background-color: var(--component-bg-color);
    position: relative;
}

.word_in_box {
    position: absolute;
    left: 0;
    top: 0;

    border-top: 1px solid var(--component-border-color);
    border-left: 1px solid var(--component-border-color);

    color: var(--font-color-chart-1);
    font-size: 1.125rem;
    text-align: left;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
}

.num_in_box {
    position: absolute;
    right: 0;
    bottom: 0;

    border-right: 1px solid var(--component-border-color);
    border-bottom: 1px solid var(--component-border-color);

    font-weight: bold;
    color: var(--font-color-highlight-1);
    font-size: 1.75rem;
    text-align: right;
    padding-bottom: 0.25rem;
    padding-right: 0.5rem;
}
</style>