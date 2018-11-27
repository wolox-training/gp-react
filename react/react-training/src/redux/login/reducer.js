import { completeReducer, completeState, createReducer } from 'redux-recompose';

import { actionTypes } from './actions';

const initialStateDescription = {
  userIsLogged: localStorage.getItem('userIsLogged') === 'true',
  userLoginError: null,
  userSession: null,
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
    [actionTypes.USER_LOGIN_VERIFY]: (state, action) => {
      console.log({ ...state, count: action.payload });
      return { ...state, count: action.payload }
      },
    [actionTypes.USER_LOGOUT]: (state, action) => ({ ...state, count: action.payload })
  }
};

const Reducer = createReducer(initialState, completeReducer(myReducer));

// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.USER_LOGIN:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_LOGIN_FAILURE:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_LOGIN_SUCCESS:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_LOGIN_VERIFY:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_LOGOUT:
//       return {
//         ...state,
//         ...action.payload
//       };
//     default:
//       return state;
//   }
// };

export default Reducer;
