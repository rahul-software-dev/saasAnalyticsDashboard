import api from './api';

const getAll = () => api.get('/users');
const getById = (id) => api.get(`/users/${id}`);
const create = (user) => api.post('/users', user);
const update = (id, data) => api.put(`/users/${id}`, data);
const remove = (id) => api.delete(`/users/${id}`);

export default { getAll, getById, create, update, remove };