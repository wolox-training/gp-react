// noinspection JSUnusedGlobalSymbols
export const makeMove = (history, squares, xIsNext) => {
  history = history.concat([{ squares }]);
  xIsNext = !xIsNext;
  const stepNumber = history.length - 1;
  return {
    type: 'MAKE_MOVE',
    payload: {
      history,
      squares,
      stepNumber,
      xIsNext
    }
  };
};

// noinspection JSUnusedGlobalSymbols
export const makeJump = (stepNumber, xIsNext) => {
  xIsNext = stepNumber % 2 === 0;
  return {
    type: 'MAKE_JUMP',
    payload: {
      stepNumber,
      xIsNext
    }
  };
};
