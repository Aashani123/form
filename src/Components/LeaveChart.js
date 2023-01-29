import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function LeaveChart({annualLeaves,casualLeaves,medicalLeaves, annualLeavesTaken, casualLeavesTaken, medicalLeavesTaken}) {
  const [data, setData] = useState({
    labels: ['Annual', 'Casual', 'Medical'],
    datasets: [
      {
        label: 'Leaves Given',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [annualLeaves, casualLeaves, medicalLeaves]
      },
      {
        label: 'Leaves Taken',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [annualLeavesTaken, casualLeavesTaken, medicalLeavesTaken]
      }
    ]
  });

  const options = {
    type: 'horizontalBar',
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  return (
    <div>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

export default LeaveChart;
