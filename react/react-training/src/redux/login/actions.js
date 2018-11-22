import UserService from '@services/UserService.js';
import { ERROR_READING_RESPONSE, MSG_UNKNOWN_ID, MSG_UNKNOWN_USER } from '@screens/Login/validation';

export const actionTypes = {
  // Get User Service
  USER_GET: 'USER_GET',
  USER_GET_FAILURE: 'USER_GET_FAILURE',
  USER_GET_SUCCESS: 'USER_GET_SUCCESS',

  // Post User Service
  USER_POST: 'USER_GET',
  USER_POST_FAILURE: 'USER_GET_FAILURE',
  USER_POST_SUCCESS: 'USER_GET_SUCCESS',

  // Login Service
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',

  // Other actions
  USER_LOGIN_VERIFY: 'USER_LOGIN_VERIFY',
  USER_LOGOUT: 'USER_LOGOUT'
};

export const actionsCreators = {
  userGet: userId => async dispatch => {
    dispatch({ type: actionTypes.USER_GET });
    let userData;
    let userDataError;
    const response = await UserService.userGet(userId);
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      dispatch({
        type: actionTypes.USER_GET_SUCCESS,
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
        type: actionTypes.USER_GET_FAILURE,
        payload: {
          userDataError
        }
      });
    }
  },

  userPost: myUser => async dispatch => {
    dispatch({ type: actionTypes.USER_POST });
    let userData;
    let userDataError;
    const response = await UserService.userPost(myUser);
    console.log(response);
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      dispatch({
        type: actionTypes.USER_POST_SUCCESS,
        payload: {
          userData
        }
      });
    } else {
      userDataError =
        response.data && response.data.error && response.data.error.message && response.data.error.statusCode
          ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
          : ERROR_READING_RESPONSE;
      dispatch({
        type: actionTypes.USER_POST_FAILURE,
        payload: {
          userDataError
        }
      });
    }
  },

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
