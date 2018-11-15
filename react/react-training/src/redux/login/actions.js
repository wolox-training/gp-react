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
        const mySession = response.data.id || MSG_UNKNOWN_ID;
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          userSession: mySession
        });
      } else {
        const myError =
          response.data.error && response.data.error.message && response.data.error.statusCode
            ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
            : ERROR_READING_RESPONSE;
        dispatch({
          type: actionTypes.LOGIN_FAILURE,
          userLoginError: myError
        });
      }
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        userLoginError: ERROR_LOGIN_SERVICE
      });
    }
  }
};
