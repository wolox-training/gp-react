import { actionTypes } from './actions';

const initialState = {};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.makeMove:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.makeJump:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
