import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/game/actions';

import { calculateWinner } from '@utils';

import Layout from './layout';

class Game extends Component {
  handleClick = i => {
    const { history, stepNumber, xIsNext, makeMove } = this.props;
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
    const { history, stepNumber, xIsNext, makeMove, makeJump } = this.props;
    return (
      <Layout
        history={history}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
        onClick={this.handleClick}
        makeMove={makeMove}
        makeJump={makeJump}
      />
    );
  }
}

Game.propTypes = {
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
  makeMove: (history, squares) => dispatch(Actions.makeMove(history, squares)),
  makeJump: stepNumber => dispatch(Actions.makeJump(stepNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
