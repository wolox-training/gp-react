import UserService from '@services/UserService.js';
import { completeTypes, createTypes } from 'redux-recompose';

import { TARGE_USERDATA } from '@constants';

export const actionTypes = createTypes(completeTypes(['USER_GET', 'USER_PATCH', 'USER_POST']));

export const actionsCreators = {
  userGet: userId => ({
    type: actionTypes.USER_GET,
    target: TARGE_USERDATA,
    service: UserService.userGet,
    payload: userId
  }),

  userPatch: (userId, newUserData) => ({
    type: actionTypes.USER_PATCH,
    target: TARGE_USERDATA,
    service: UserService.userPatch,
    payload: { userId, newUserData }
  }),

  userPost: myUser => ({
    type: actionTypes.USER_POST,
    target: TARGE_USERDATA,
    service: UserService.userPost,
    payload: myUser
  })
};
