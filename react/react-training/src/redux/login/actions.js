import UserService from '@services/UserService.js';
import { ERROR_LOGIN_SERVICE, ERROR_READING_RESPONSE, MSG_UNKNOWN_ID } from '@screens/Login/validation';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_VERIFY: 'LOGIN_VERIFY',
  LOGOUT: 'LOGOUT'
};

export const actionsCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actionTypes.LOGIN });
    const response = await UserService.login(username, password);
    if (response && response.data) {
      if (response.ok) {
        const userIsLogged = true;
        const userLoginError = null;
        const userSession = response.data.id || MSG_UNKNOWN_ID;
        localStorage.setItem('userIsLogged', true.toString());
        localStorage.setItem('userSession', userSession);
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: {
            userIsLogged,
            userLoginError,
            userSession
          }
        });
      } else {
        const userIsLogged = false;
        const userLoginError =
          response.data.error && response.data.error.message && response.data.error.statusCode
            ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
            : ERROR_READING_RESPONSE;
        const userSession = null;
        localStorage.removeItem('userIsLogged');
        localStorage.removeItem('userSession');
        dispatch({
          type: actionTypes.LOGIN_FAILURE,
          payload: {
            userIsLogged,
            userLoginError,
            userSession
          }
        });
      }
    } else {
      const userIsLogged = false;
      const userLoginError = ERROR_LOGIN_SERVICE;
      const userSession = null;
      localStorage.removeItem('userIsLogged');
      localStorage.removeItem('userSession');
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: {
          userIsLogged,
          userLoginError,
          userSession
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
