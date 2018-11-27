import { completeReducer, completeState, createReducer, onReadValue, onSpreadValue } from 'redux-recompose';

import { actionTypes } from './actions';

const initialStateDescription = {
  userIsLogged: localStorage.getItem('userIsLogged') === 'true',
  userLoginError: null,
  userSession: localStorage.getItem('userSession') || null,
  userId: null,
  userData: null
};

const initialState = completeState(initialStateDescription, [
  'userIsLogged',
  'userLoginError',
  'userSession',
  'userId'
]);

const myReducer = {
  primaryActions: [actionTypes.USER_LOGIN],
  override: {
    [actionTypes.USER_LOGIN_SET]: onReadValue(),
    [actionTypes.USER_LOGIN_VERIFY]: onSpreadValue(),
    [actionTypes.USER_LOGOUT]: onSpreadValue()
  }
};

const Reducer = createReducer(initialState, completeReducer(myReducer));

export default Reducer;
