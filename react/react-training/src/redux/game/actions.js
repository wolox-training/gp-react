export const actionsCreators = {
  makeMove: (history, squares) => (dispatch, getState) => {
    history = history.concat([{ squares }]);
    const xIsNext = !getState().game.xIsNext;
    const stepNumber = history.length - 1;
    dispatch({
      type: 'MAKE_MOVE',
      payload: {
        history,
        squares,
        stepNumber,
        xIsNext
      }
    });
  },

  makeJump: (stepNumber, xIsNext) => {
    xIsNext = stepNumber % 2 === 0;
    return {
      type: 'MAKE_JUMP',
      payload: {
        stepNumber,
        xIsNext
      }
    };
  }
};
