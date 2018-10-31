const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

// noinspection JSUnusedGlobalSymbols
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return {
        ...state,
        ...action.payload
      };
    case 'MAKE_JUMP':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
