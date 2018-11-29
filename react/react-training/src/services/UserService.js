import { wait } from '@utils';

import api from '../config/api';

export default {
  userGet: async userId => {
    await wait(2000);
    return api.get(`/Users/${userId}`);
  },
  userPatch: ({ userId, newUserData }) => api.patch(`/Users/${userId}`, newUserData),
  userPost: user => api.post('/Users', user)
};
