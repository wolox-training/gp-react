import UserService from '@services/UserService.js';
import { ERROR_READING_RESPONSE, MSG_UNKNOWN_USER } from '@screens/Login/validation';

export const actionTypes = {
  // Get User Service
  USER_GET: 'USER_GET',
  USER_GET_FAILURE: 'USER_GET_FAILURE',
  USER_GET_SUCCESS: 'USER_GET_SUCCESS',

  // Patch User Service
  USER_PATCH: 'USER_PATCH',
  USER_PATCH_FAILURE: 'USER_PATCH_FAILURE',
  USER_PATCH_SUCCESS: 'USER_PATCH_SUCCESS',

  // Post User Service
  USER_POST: 'USER_GET',
  USER_POST_FAILURE: 'USER_GET_FAILURE',
  USER_POST_SUCCESS: 'USER_GET_SUCCESS'
};

export const actionsCreators = {
  userGet: userId => async dispatch => {
    dispatch({ type: actionTypes.USER_GET });
    let userData;
    let userDataError;
    const response = await UserService.userGet(userId);
    if (response.ok) {
      userData = response.data || MSG_UNKNOWN_USER;
      userDataError = null;
      dispatch({
        type: actionTypes.USER_GET_SUCCESS,
        payload: {
          userId,
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
        type: actionTypes.USER_GET_FAILURE,
        payload: {
          userDataError
        }
      });
    }
  },

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
