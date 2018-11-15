import UserService from '@services/UserService.js';
import { MSG_UNKNOWN_ID, ERROR_READING_RESPONSE, ERROR_LOGIN_SERVICE } from '@screens/Login/validation';

export const actionTypes = {
  login: 'LOGIN',
  loginSuccess: 'LOGIN_SUCCESS',
  loginFailure: 'LOGIN_FAILURE'
};

export const actionsCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actionTypes.login });
    const response = await UserService.login(username, password);
    if (response && response.data) {
      if (response.ok) {
        const mySession = response.data.id ? response.data.id : MSG_UNKNOWN_ID;
        dispatch({
          type: actionTypes.loginSuccess,
          userSession: mySession
        });
      } else {
        const myError =
          response.data.error && response.data.error.message && response.data.error.statusCode
            ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
            : ERROR_READING_RESPONSE;
        dispatch({
          type: actionTypes.loginFailure,
          userLoginError: myError
        });
      }
    } else {
      dispatch({
        type: actionTypes.loginFailure,
        userLoginError: ERROR_LOGIN_SERVICE
      });
    }
  }
};
