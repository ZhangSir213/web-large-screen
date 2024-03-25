<template>
    <div class="canvas-pie">
        <div id="oil-discount"></div>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, watch, onMounted, getCurrentInstance } from "vue";
import * as echarts from "echarts";

onMounted(() => {
    changeBar()
})

function arrCount(arr) {
  let count = 0
  arr.forEach(item => {
    count = count + item.value
  })
  return count
}
// 基本柱形图
function changeBar() {
    const myChart = echarts.init(document.getElementById("oil-discount"), 'dark');
    const data = [{
        value: 691,
        name: '美国'
    },
    {
        value: 300,
        name: '印度'
    },
    {
        value: 200,
        name: '巴西'
    },
    {
        value: 400,
        name: '俄罗斯'
    },
    {
        value: 300,
        name: '朝鲜'
    },
    {
        value: 200,
        name: '韩国'
    },
    ]
    myChart.setOption({
        backgroundColor: 'rgba(0, 0, 0, 0)',
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
        // tooltip: { trigger: "item" },
        legend: {
            show: window.innerWidth > 1680,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 15,
            itemHeight: 12,
            formatter: function (name) {
                //通过name获取到数组对象中的单个对象
                let singleData = data.filter(function (item) {
                    return item.name == name
                })
                return name + ' | ' + singleData[0].value;
            },
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
        },
        graphic: [
            {
                type: "text",
                left: "center",
                style: {
                    font: '14px bolder "Microsoft YaHei"',
                    textAlign: "center",
                    textVerticalAlign: "middle",
                },
            },
        ],
        series: [
            {
                type: "pie",
                center: ["50%", "35%"],
                radius: ["30%", "60%"],
                data: data,
                label: {
                    show: true,
                    position: "outside",
                    formatter: "{b} {d}%",
                    fontSize: 16,
                },
            },
        ],
    })
}
</script>

<style>
#oil-discount {
    width: 100%;
    height: 300px;
}
</style>