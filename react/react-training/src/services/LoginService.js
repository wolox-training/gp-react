import { wait } from '@utils';

import api from '../config/api';

export default {
  userLogin: async ({ username, password }) => {
    await wait(2000);
    return api.post('/Users/login', { username, password });
  }
};
