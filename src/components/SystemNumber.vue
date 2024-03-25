<template>
    <div class="container">
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
.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
}

.box {
    width: 32%;
    height: 100%;
    background-color: #7c7c7c50;
    position: relative;
}

.word_in_box {
    position: absolute;
    left: 0;
    top: 0;

    border-top: 1px solid lightblue;
    border-left: 1px solid lightblue;

    color: lightcyan;
    font-size: 1.125rem;
    text-align: left;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
}

.num_in_box {
    position: absolute;
    right: 0;
    bottom: 0;

    border-right: 1px solid lightblue;
    border-bottom: 1px solid lightblue;

    font-weight: bold;
    color: darkorange;
    font-size: 1.75rem;
    text-align: right;
    padding-bottom: 0.25rem;
    padding-right: 0.5rem;
}
</style>