<template>
    <div id="底部PC机状态条">
        <pcStatementItem v-for="d in _data" :key="d.id" :name="d.name" :state="d.state" :form="d.form"
            :target="d.target"></pcStatementItem>
    </div>
</template>


<script setup lang="ts">
import pcStatementItem from './PCStateItem.vue';
import { ref } from 'vue'
import data from '../json/data';

let _data = ref(data.PCStatement);

</script>

<style scoped>
#底部PC机状态条 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background-color: var(--component-bg-color);
}
</style>