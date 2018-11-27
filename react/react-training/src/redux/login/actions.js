import UserService from '@services/LoginService.js';
import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

const myActionTypes = ['USER_LOGIN'];
export const actionTypes = createTypes(
  completeTypes(myActionTypes, ['USER_LOGIN_VERIFY', 'USER_LOGOUT', 'USER_LOGIN_SET'])
);

export const actionsCreators = {
  userLogin: (username, password) => ({
    type: actionTypes.USER_LOGIN,
    target: 'userLogin',
    service: UserService.userLogin,
    payload: { username, password },
    injections: [
      withPostSuccess((dispatch, response) => {
        const userIsLogged = true;
        const userSession = response.data.id;
        localStorage.setItem('userIsLogged', `${userIsLogged}`);
        localStorage.setItem('userSession', userSession);
        dispatch({
          type: actionTypes.USER_LOGIN_SET,
          target: 'userIsLogged',
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
