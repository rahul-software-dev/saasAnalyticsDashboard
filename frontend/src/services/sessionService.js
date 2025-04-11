import api from './api';

const getSessions = () => api.get('/sessions');
const terminateSession = (id) => api.delete(`/sessions/${id}`);

export default { getSessions, terminateSession };