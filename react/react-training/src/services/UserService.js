import api from '../config/api';

export default {
  userGet: userId => api.get(`/Users/${userId}`),
  userPatch: ({ userId, newUserData }) => api.patch(`/Users/${userId}`, newUserData),
  userPost: user => api.post('/Users', user)
};
