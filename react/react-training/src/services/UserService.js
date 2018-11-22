import api from '../config/api';

export default {
  userGet: userId => api.get(`/Users/${userId}`),
  userLogin: (username, password) => api.post('/Users/login', { username, password }),
  userPatch: (userId, newUserData) => api.patch(`/Users/${userId}`, newUserData),
  userPost: user => api.post('/Users', user)
};
