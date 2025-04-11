import api from './api';

const getAll = () => api.get('/roles');
const create = (role) => api.post('/roles', role);
const update = (id, data) => api.put(`/roles/${id}`, data);
const remove = (id) => api.delete(`/roles/${id}`);
const getPermissions = (roleId) => api.get(`/roles/${roleId}/permissions`);

export default { getAll, create, update, remove, getPermissions };