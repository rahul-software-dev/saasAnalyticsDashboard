import api from './api';

const getProfile = () => api.get('/settings/profile');
const updateProfile = (data) => api.put('/settings/profile', data);
const updatePreferences = (data) => api.put('/settings/preferences', data);

export default { getProfile, updateProfile, updatePreferences };