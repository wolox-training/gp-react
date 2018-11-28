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

export default Reducer;
