<template>
    <div id="grapher-pie">
        <div id="oil-discount"></div>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, watch, onMounted, getCurrentInstance } from "vue";
import * as echarts from "echarts";
import data from "../json/data";

let _data = data.CountryCount;

_data.sort((a, b) => b.value - a.value);
let topTen = _data.slice(0, 8);
let otherSum = _data.slice(8).reduce((prev, cur) => prev + cur.value, 0);
topTen.push({ name: "其他", value: otherSum });

onMounted(() => {
    changeBar()
})
function changeBar() {
    const myChart = echarts.init(document.getElementById("oil-discount"));
    myChart.setOption({
        title: {
            text: "样本数量统计",
            left: "center",
            top: "5%",
            textStyle: {
                color: "#fff",
                fontSize: 28,
            },
        },
        color: [
            "#96DDF2",
            "#3436C7",
            "#63DCA6",
            "#5B93FF",
            "#F899C9 ",
            "#FF8F6B",
            "#FFD66B",
            "#FF7723",
            "#00FF7F",
            "#FF0000",
        ],
        tooltip: {
            trigger: "item",
            fontSize: 36,
        },
        legend: {
            show: false,
            bottom: "0",
            left: "center",
            itemWidth: 15,
            itemHeight: 12,
        },
        series: [
            {
                type: "pie",
                radius: ["35%", "70%"],
                position: "center",
                bottom: "0",
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: "outside",
                    formatter: "{b} {d}%",
                    color: "lightcyan",
                    fontSize: 24,
                },
                data: topTen,
            },
        ],
    })
}
</script>

<style>
#grapher-pie {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--component-bg-color);
}

#oil-discount {
    width: 100%;
    height: 100%;
}
</style>