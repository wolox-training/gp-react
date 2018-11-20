import api from '../config/api';

export default {
  login: (username, password) => api.post('/Users/login', { username, password })
};
