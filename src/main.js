import echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(main)

// 指定图表的配置项和数据
// 使用刚指定的配置项和数据显示图表。
const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const yData = [820, 932, 901, 934, 1290, 1330, 1320]
myChart.setOption({
  baseOption: {
    xAxis: {
      type: 'category',
      data: xData
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
      data: yData,
      type: 'line'
    }]
  },
  media: [{
    query: {maxWidth: 500},
    option: {
      series: [{
        itemStyle: {
          borderWidth: 30
        }
      }]
    }
  }]
})


let isLoading = false

loadMoreButton.addEventListener('click', () => {
  if (isLoading === true) {return}
  myChart.showLoading()
  isLoading = true
  setTimeout(() => {
    const key = 'Mon'
    const value = 900
    myChart.setOption({
      xAxis: {
        data: [...xData, key]
      },
      series: [{
        data: [...yData, value]
      }]
    })
    myChart.hideLoading()
    isLoading = false
  }, 3000)
})

myChart.on('click', (e) => {
  console.log(e.name)
  console.log(e.dataIndex)
  console.log(e.data)
  window.open(`http://www.baidu.com/?time=${e.name}`)
})

