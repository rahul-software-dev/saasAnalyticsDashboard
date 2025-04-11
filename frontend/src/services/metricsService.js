import api from './api';

const getUsageStats = () => api.get('/metrics/usage');
const getFeatureStats = () => api.get('/metrics/features');
const getTrends = () => api.get('/metrics/trends');

export default { getUsageStats, getFeatureStats, getTrends };