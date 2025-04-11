import api from './api';

const logEvent = (eventData) => api.post('/events', eventData);
const getEvents = (filters) => api.get('/events', { params: filters });

export default { logEvent, getEvents };