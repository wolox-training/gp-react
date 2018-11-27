import UserService from '@services/UserService.js';
import { completeTypes, createTypes } from 'redux-recompose';

const myActionTypes = ['USER_GET', 'USER_PATCH', 'USER_POST'];
export const actionTypes = createTypes(completeTypes(myActionTypes));

export const actionsCreators = {
  userGet: userId => ({
    type: actionTypes.USER_GET,
    target: 'userData',
    service: UserService.userGet,
    payload: userId
  }),

  userPatch: (userId, newUserData) => ({
    type: actionTypes.USER_PATCH,
    target: 'userData',
    service: UserService.userPatch,
    payload: { userId, newUserData }
  }),

  userPost: myUser => ({
    type: actionTypes.USER_POST,
    target: 'userData',
    service: UserService.userPost,
    payload: myUser
  })
};
