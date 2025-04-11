const COLORS = ['#36A2EB', '#FF6384', '#4BC0C0', '#FFCE56', '#9966FF'];

export const getChartColors = (count) => COLORS.slice(0, count);

export const formatChartData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: 'Usage',
      data,
      backgroundColor: getChartColors(data.length),
    },
  ],
});