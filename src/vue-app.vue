<template>
  <div>
    <h1>
      示例
      <button @click="loadMore">加载更多</button>
    </h1>
    <button @click="loadMore">加载更多</button>
    <vue-echarts :option="option" :loading="loading"/>
  </div>
</template>

<script>
  import VueEcharts from './vue-echarts.vue'

  export default {
    data() {
      return {
        loading: false,
        option: {

          baseOption: {
            xAxis: {
              type: 'category',
              data: ['1', '2']
            },
            yAxis: {
              type: 'value'
            },
            tooltip: {
              show: true
            },
            series: [{
              lineStyle: {
                color: 'blue'
              },
              itemStyle: {
                borderWidth: 10
              },
              data: [1, 2],
              type: 'line'
            }]
          }
        }
      }
    },
    components: {VueEcharts},
    methods: {
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.option = {
            xAxis: {
              data: ['0', '1', '2']
            },
            series: [{
              data: [1, 2, 3]
            }]
          }
        }, 2000)
      }
    }
  }
</script>