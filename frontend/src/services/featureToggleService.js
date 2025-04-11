import api from './api';

const getAll = () => api.get('/features');
const toggle = (id, enabled) => api.put(`/features/${id}`, { enabled });

export default { getAll, toggle };