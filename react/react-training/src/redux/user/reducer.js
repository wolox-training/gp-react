import { completeReducer, completeState, createReducer } from 'redux-recompose';

import { actionTypes } from './actions';

const initialStateDescription = {
  userId: null,
  userData: null
};

const initialState = completeState(initialStateDescription, ['userId']);

const myReducer = {
  primaryActions: [actionTypes.USER_GET, actionTypes.USER_PATCH, actionTypes.USER_POST]
};

const Reducer = createReducer(initialState, completeReducer(myReducer));

// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.USER_GET:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_GET_FAILURE:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_GET_SUCCESS:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_PATCH:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_PATCH_FAILURE:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_PATCH_SUCCESS:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_POST:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_POST_FAILURE:
//       return {
//         ...state,
//         ...action.payload
//       };
//     case actionTypes.USER_POST_SUCCESS:
//       return {
//         ...state,
//         ...action.payload
//       };
//     default:
//       return state;
//   }
// };

export default Reducer;
