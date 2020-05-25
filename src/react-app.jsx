import React, {useState} from 'react'
import {ReactEcharts} from './react-echarts'

function ReactApp() {
  const [option, setOption] = useState({
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
  })
  const [loading, setLoading] = useState(false)
  const onClick = () => {
    if (loading) { return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOption({
        xAxis: {
          data: ['0', '1', '2']
        },
        series: [{
          data: [1, 2, 3]
        }]
      })
    }, 2000)
  }
  return (
    <div>
      <h1>Echarts in React</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>加载更多</button>
    </div>
  )
}

export default ReactApp