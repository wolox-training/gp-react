import api from '../config/api';

export default {
  userGet: userId => api.get(`/Users/${userId}`),
  userLogin: (username, password) => api.post('/Users/login', { username, password }),
  userPost: myUser => api.post('/Users', myUser)
};
