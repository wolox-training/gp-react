import { actionTypes } from './actions';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

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
