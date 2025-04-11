import api from './api';

const getWidgets = () => api.get('/dashboard/widgets');
const getChartData = (type) => api.get(`/dashboard/charts/${type}`);

export default { getWidgets, getChartData };