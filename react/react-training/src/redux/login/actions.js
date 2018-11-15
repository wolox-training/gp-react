import UserService from '@services/UserService.js';
import { MSG_UNKNOWN_ID, ERROR_READING_RESPONSE, ERROR_LOGIN_SERVICE } from '@screens/Login/validation';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
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
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: {
          userIsLogged,
          userLoginError,
          userSession
        }
      });
    }
  }
};
