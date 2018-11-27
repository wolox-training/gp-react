import UserService from '@services/LoginService.js';
import { ERROR_READING_RESPONSE, MSG_UNKNOWN_ID } from '@screens/Login/validation';

export const actionTypes = {
  // Login Service
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',

  // Other actions
  USER_LOGIN_VERIFY: 'USER_LOGIN_VERIFY',
  USER_LOGOUT: 'USER_LOGOUT'
};

export const actionsCreators = {
  userLogin: (username, password) => async dispatch => {
    dispatch({ type: actionTypes.USER_LOGIN });
    let userIsLogged;
    let userLoginError;
    let userSession;
    const response = await UserService.userLogin(username, password);
    if (response.ok) {
      userIsLogged = true;
      userLoginError = null;
      userSession = response.data.id || MSG_UNKNOWN_ID;
      localStorage.setItem('userIsLogged', `${userIsLogged}`);
      localStorage.setItem('userSession', userSession);
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: {
          userIsLogged,
          userSession
        }
      });
    } else {
      userIsLogged = false;
      userLoginError =
        response.data && response.data.error && response.data.error.message && response.data.error.statusCode
          ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
          : ERROR_READING_RESPONSE;
      userSession = null;
      localStorage.removeItem('userIsLogged');
      localStorage.removeItem('userSession');
      dispatch({
        type: actionTypes.USER_LOGIN_FAILURE,
        payload: {
          userIsLogged,
          userLoginError
        }
      });
    }
  },

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
