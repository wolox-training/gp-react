import UserService from '@services/UserService.js';

export const actionTypes = {
  login: 'LOGIN',
  loginSuccess: 'LOGIN_SUCCESS',
  loginFailure: 'LOGIN_FAILURE'
};

export const actionsCreators = {
  login: (username, password) => async dispatch => {
    dispatch({ type: actionTypes.login });
    const response = await UserService.login(username, password);
    if (response) {
      if (response.ok) {
        const mySession =
          response && response.data && response.data.id ? response.data.id : 'Valid User - Unknown Id';
        dispatch({
          type: actionTypes.loginSuccess,
          userSession: mySession
        });
      } else {
        const myError =
          response &&
          response.data &&
          response.data.error &&
          response.data.error.message &&
          response.data.error.statusCode
            ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
            : 'There was a problem trying to read the error from the response.';
        dispatch({
          type: actionTypes.loginFailure,
          userLoginError: myError
        });
      }
    } else {
      dispatch({
        type: actionTypes.loginFailure,
        userLoginError: 'There was a problem trying to read the service login.'
      });
    }
  }
};
