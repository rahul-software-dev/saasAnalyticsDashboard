import api from './api';

const login = (credentials) => api.post('/auth/login', credentials);
const signup = (data) => api.post('/auth/signup', data);
const logout = () => {
  localStorage.removeItem('token');
  return Promise.resolve();
};

export default { login, signup, logout };