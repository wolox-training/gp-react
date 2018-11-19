import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { actionsCreators as Actions } from '@redux/game/actions';
import { connect } from 'react-redux';

import { calculateWinner } from '@utils';

import Game from './layout';

class GameContainer extends Component {
  handleClick = i => {
    const { history, makeMove, stepNumber, xIsNext } = this.props;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    makeMove(newHistory, squares);
  };

  render() {
    const { history, makeJump, makeMove, stepNumber, xIsNext } = this.props;
    return (
      <Game
        history={history}
        makeJump={makeJump}
        makeMove={makeMove}
        onClick={this.handleClick}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
      />
    );
  }
}

GameContainer.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  makeJump: PropTypes.func.isRequired,
  makeMove: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = ({ GameReducer }) => ({
  history: GameReducer.history,
  stepNumber: GameReducer.stepNumber,
  xIsNext: GameReducer.xIsNext
});

const mapDispatchToProps = dispatch => ({
  makeJump: stepNumber => dispatch(Actions.makeJump(stepNumber)),
  makeMove: (history, squares) => dispatch(Actions.makeMove(history, squares))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
