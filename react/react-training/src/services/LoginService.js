import api from '../config/api';

export default {
  userLogin: ({ username, password }) => api.post('/Users/login', { username, password })
};
