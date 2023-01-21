import React from 'react';
import { Bar } from 'react-chartjs-2';

class LeaveChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingLeaves: props.remainingLeaves,
    };
  }

  render() {
    const data = {
      labels: ['Remaining Leaves'],
      datasets: [
        {
          label: 'Leaves',
          data: [this.state.remainingLeaves],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    return <Bar data={data} />;
  }
}

export default LeaveChart;
