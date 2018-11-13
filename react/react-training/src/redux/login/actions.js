import UserService from '@servicess/UserService.js';

export const actions = createTypes(
  ['GET_USER_ID', 'GET_USER_SUCCESS', 'GET_USER_FAILURE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
  '@@USERS'
);

const actionCreators = {
  getUserId: () => async dispatch => {
    dispatch({ type: actions.GET_USER_ID });
    const response = await UserService.getUserId();
    if (response.ok) {
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_USER_FAILURE,
        payload: response.problem
      });
    }
  },

  login: () => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await UserService.login();
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
