import React from 'react'
import {Line} from 'react-chartjs-2';

function LeaveChart() {
  const data={
    labels:['annual','casual','medical'],
    datasets:[
      {
        label:'Number of leave days',
        data:[14,7,7]
      }
    ]
  }
  return (
    <div>
      hi
    </div>
  )
}

export default LeaveChart;