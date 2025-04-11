import api from './api';

const getLogs = (filters) => api.get('/audit-logs', { params: filters });

export default { getLogs };