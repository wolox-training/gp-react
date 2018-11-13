import api from '../config/api';

export default {
  getUserDetail: id => api.get('/users', { id }),
  login: (email, password) => api.post('/Users/login', { email, password })
};
