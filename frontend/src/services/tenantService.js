import api from './api';

const getAll = () => api.get('/tenants');
const create = (tenant) => api.post('/tenants', tenant);
const update = (id, data) => api.put(`/tenants/${id}`, data);
const remove = (id) => api.delete(`/tenants/${id}`);

export default { getAll, create, update, remove };