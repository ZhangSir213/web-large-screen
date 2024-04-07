<template>
    <div class="breed-log-item">
        <div class="breed-log-id">{{ "id: " + id }}</div>
        <div class="breed-log-value">{{ "value: " + value }}</div>
        <div class="breed-log-timestamp">{{ "timestamp: " + timestamp }}</div>
        <div class="breed-log-lasting-time">{{ "lasting_time: " + lasting_time }}</div>
        <div class="breed-log-group">{{ "group: " + group }}</div>
        <div class="breed-log-package">{{ "package: " + package }}</div>
        <div class="breed-log-machine">{{ "machine: " + machine }}</div>
        <div class="breed-log-status">{{ "status: " + status }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<
    {
        id?: number,
        value?: number,
        timestamp?: string,
        lasting_time?: number,
        group?: string,
        package?: string,
        machine?: string,
        status?: string
    }
>()
</script>

<style scoped>
.breed-log-item {
    position: relative;
    width: 96%;
    height: 250px;
    background-color: var(--component-bg-color);
    border: 1px solid var(--component-border-color);
    margin: 10px;
    border-radius: 10px;
}

.breed-log-id {
    position: absolute;
    top: 10%;
    left: 5%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-value {
    position: absolute;
    top: 10%;
    left: 27%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-group {
    position: absolute;
    top: 10%;
    left: 56%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-timestamp {
    position: absolute;
    top: 30%;
    left: 5%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-lasting-time {
    position: absolute;
    top: 50%;
    left: 5%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-package {
    position: absolute;
    top: 50%;
    left: 56%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-machine {
    position: absolute;
    top: 70%;
    left: 5%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}
.breed-log-status {
    position: absolute;
    top: 70%;
    left: 56%;
    font-size: 1.125rem;
    color: var(--font-color-chart-1);
}

</style>