import UserService from '@services/LoginService.js';
import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import { TARGE_USERISLOGGED, TARGET_USERLOGIN } from '@constants';

export const actionTypes = createTypes(
  completeTypes(['USER_LOGIN'], ['USER_LOGIN_VERIFY', 'USER_LOGOUT', 'USER_LOGIN_SET'])
);

export const actionsCreators = {
  userLogin: (username, password) => ({
    type: actionTypes.USER_LOGIN,
    target: TARGET_USERLOGIN,
    service: UserService.userLogin,
    payload: { username, password },
    injections: [
      withPostSuccess((dispatch, response) => {
        localStorage.setItem('userIsLogged', 'true');
        localStorage.setItem('userSession', response.data.id);
        dispatch({
          type: actionTypes.USER_LOGIN_SET,
          target: TARGE_USERISLOGGED,
          payload: true
        });
      })
    ]
  }),

  userLoginVerify: () => dispatch => {
    const userIsLogged = localStorage.getItem('userIsLogged') === 'true';
    const userSession = userIsLogged ? localStorage.getItem('userSession') : false;
    dispatch({
      type: actionTypes.USER_LOGIN_VERIFY,
      payload: {
        userIsLogged,
        userSession
      }
    });
  },

  userLogout: () => dispatch => {
    localStorage.removeItem('userIsLogged');
    localStorage.removeItem('userSession');
    const userIsLogged = false;
    const userSession = null;
    dispatch({
      type: actionTypes.USER_LOGOUT,
      payload: {
        userIsLogged,
        userSession
      }
    });
  }
};
