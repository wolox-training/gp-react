import { actionTypes } from '@constants';

export const actionsCreators = {
  makeMove: (history, squares) => (dispatch, getState) => {
    history = history.concat([{ squares }]);
    const xIsNext = !getState().GameReducer.xIsNext;
    const stepNumber = history.length - 1;
    dispatch({
      type: actionTypes.makeMove,
      payload: {
        history,
        squares,
        stepNumber,
        xIsNext
      }
    });
  },

  makeJump: stepNumber => {
    const xIsNext = stepNumber % 2 === 0;
    return {
      type: actionTypes.makeJump,
      payload: {
        stepNumber,
        xIsNext
      }
    };
  }
};
