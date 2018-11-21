import UserService from '@services/UserService.js';
import { ERROR_READING_RESPONSE, MSG_UNKNOWN_ID, MSG_UNKNOWN_USER } from '@screens/Login/validation';

export const actionTypes = {
  // Get User Service
  GET_USER: 'GET_USER',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',

  // Login Service
  LOGIN: 'LOGIN',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  // Other actions
  LOGIN_VERIFY: 'LOGIN_VERIFY',
  LOGOUT: 'LOGOUT'
};

export const actionsCreators = {
  getUser: userId => async dispatch => {
    dispatch({ type: actionTypes.GET_USER });
    let userData;
    let userDataError;
    const response = await UserService.getUser(userId);
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      dispatch({
        type: actionTypes.GET_USER_SUCCESS,
        payload: {
          userId,
          userData
        }
      });
    } else {
      userDataError =
        response.data && response.data.error && response.data.error.message && response.data.error.statusCode
          ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
          : ERROR_READING_RESPONSE;
      dispatch({
        type: actionTypes.GET_USER_FAILURE,
        payload: {
          userDataError
        }
      });
    }
  },

  login: (username, password) => async dispatch => {
    dispatch({ type: actionTypes.LOGIN });
    let userIsLogged;
    let userLoginError;
    let userSession;
    const response = await UserService.login(username, password);
    if (response.ok) {
      userIsLogged = true;
      userLoginError = null;
      userSession = response.data.id || MSG_UNKNOWN_ID;
      localStorage.setItem('userIsLogged', `${userIsLogged}`);
      localStorage.setItem('userSession', userSession);
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
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
        type: actionTypes.LOGIN_FAILURE,
        payload: {
          userIsLogged,
          userLoginError
        }
      });
    }
  },

  loginVerify: () => dispatch => {
    const userIsLogged = localStorage.getItem('userIsLogged') === 'true';
    const userSession = userIsLogged ? localStorage.getItem('userSession') : false;
    dispatch({
      type: actionTypes.LOGIN_VERIFY,
      payload: {
        userIsLogged,
        userSession
      }
    });
  },

  logout: () => dispatch => {
    localStorage.removeItem('userIsLogged');
    localStorage.removeItem('userSession');
    const userIsLogged = false;
    const userSession = null;
    dispatch({
      type: actionTypes.LOGOUT,
      payload: {
        userIsLogged,
        userSession
      }
    });
  }
};
