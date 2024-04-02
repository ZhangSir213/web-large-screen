<template>
    <button class="pc-state-item" @click="skipToTarget(target)">
        <div class="pc-state-item-img">
            <img :src="getImageUrl(form)" class="image0" />
            <img :src="getStateUrl(state)" class="image1" />
        </div>
        <div class="pc-id">{{ name }}</div>
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    name?: string,
    state?: string,
    form?: string,
    target?: string
}>()

function getImageUrl(form: any):string{
    return new URL(`../assets/${form}_white.svg`, import.meta.url).href
}
function getStateUrl(state: any):string{
    return new URL(`../assets/${state}.svg`, import.meta.url).href
}
function skipToTarget(target: any) {
    window.open(target, "_blank");
}
</script>

<style scoped>
.pc-state-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 90%;
    background-color: var(--component-bg-color);
    border: 1px solid var(--component-border-color);
    margin: 10px;
    border-radius: 5%;
}

.pc-state-item-img {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 150px;
}

.pc-id {
    position: absolute;
    bottom: 10%;
    font-size: 1rem;
    color: var(--font-color-chart-1);
}
.image0 {
    width: 100%;
    height: 100%;
}
.image1 {
    width: 30%;
    height: 30%;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>