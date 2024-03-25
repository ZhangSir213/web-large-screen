## 项目目录

```js
├─App.vue
├─main.ts
├─style.css
├─vite-env.d.ts
├─utils
|   ├─index.ts
|   ├─lib
|   |  └echarts.ts // echarts 对象初始化配置
├─json
|  ├─data
|  |    ├─
|  |    └index.ts
|  ├─geo
|  |    ├─world-country-geo.json // 全球国家地理位置信息
|  |    └index.ts
|  ├─mapping
|  |    ├─country-name-zh-mapping.json // 国家中文映射
|  |    └index.ts
├─hooks
|   ├─useEcharts.ts // hooks 里面只需关注这个文件就好
|   ├─useEventListener.ts
|   └useTimeout.ts 
├─components
|     └WorldCountryChart.vue // 世界地图组件
```



## 详细说明

- 世界地图：目前配置为鼠标移动到对应国家上面时显示当前该国家名称以及样本数

