import UserService from '@services/UserService.js';
import { MSG_UNKNOWN_ID, ERROR_READING_RESPONSE } from '@screens/Login/validation';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const actionsCreators = {
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
  }
};
