<template>
    <div class="pc-state-item">
        <div class="pc-state-item-img"></div>
        <div class="pc-id">{{ name }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name?: string,
    state?: string,
}>()
</script>

<style scoped>
.pc-state-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 100%;
    background-color: var(--component-bg-color);
    border: 1px solid var(--component-border-color);
    margin: 10px;
    border-radius: 5%;
}

pc-state-item-img {
    position:absolute;
    top: 5%;
    width: 100px;
    height: 100px;
    background-color: aliceblue;
    background-size: cover;
    background-position: center;
}

.pc-id {
    position: absolute;
    top: 60%;
    font-size: 1rem;
    color: var(--font-color-chart-1);
    margin-left: 10px;
}
</style>