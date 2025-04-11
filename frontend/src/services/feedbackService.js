import api from './api';

const submit = (feedback) => api.post('/feedback', feedback);
const getAll = () => api.get('/feedback');

export default { submit, getAll };