import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const FeatureUsageChart = () => {
  const data = {
    labels: ['Dashboard', 'Analytics', 'Settings', 'Reports', 'Billing'],
    datasets: [{
      label: 'Feature Usage',
      data: [180, 230, 120, 300, 90],
      backgroundColor: '#2196F3'
    }]
  };

  return (
    <div className="chart-container">
      <h3>Feature Usage</h3>
      <Bar data={data} />
    </div>
  );
};

export default FeatureUsageChart;