import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const EngagementChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'User Engagement',
      data: [100, 200, 150, 300, 400, 350, 500],
      borderColor: '#4CAF50',
      fill: false,
      tension: 0.3
    }]
  };

  return (
    <div className="chart-container">
      <h3>User Engagement (Weekly)</h3>
      <Line data={data} />
    </div>
  );
};

export default EngagementChart;