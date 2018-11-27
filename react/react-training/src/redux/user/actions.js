import UserService from '@services/UserService.js';
import { completeTypes, createTypes } from 'redux-recompose';
import { ERROR_READING_RESPONSE, MSG_UNKNOWN_USER } from '@screens/Login/validation';

const myActionTypes = ['USER_GET', 'USER_PATCH', 'USER_POST'];
export const actionTypes = createTypes(completeTypes(myActionTypes));

export const actionsCreators = {
  userGet: userId => ({
    type: actionTypes.USER_GET,
    target: 'userData',
    service: UserService.userGet,
    payload: userId
  }),

  userPatch: (userId, newUserData) => async dispatch => {
    dispatch({ type: actionTypes.USER_PATCH });
    let userData;
    let userDataError;
    const response = await UserService.userPatch(userId, newUserData);
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      userDataError = null;
      dispatch({
        type: actionTypes.USER_PATCH_SUCCESS,
        payload: {
          userData,
          userDataError
        }
      });
    } else {
      userDataError =
        response.data && response.data.error && response.data.error.message && response.data.error.statusCode
          ? `Error ${response.data.error.statusCode} - ${response.data.error.message}`
          : ERROR_READING_RESPONSE;
      dispatch({
        type: actionTypes.USER_PATCH_FAILURE,
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
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      userDataError = null;
      dispatch({
        type: actionTypes.USER_POST_SUCCESS,
        payload: {
          userData,
          userDataError
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
  }
};
