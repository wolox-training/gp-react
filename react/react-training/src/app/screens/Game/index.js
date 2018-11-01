import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/game/actions';

import { calculateWinner } from '@utils';

import Board from './components/Board/';
import HistoryItem from './components/HistoryItem/';
import styles from './styles.scss';

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

    makeMove(newHistory, squares, xIsNext);
  };

  jumpTo = step => {
    const { xIsNext, makeJump } = this.props;
    makeJump(step, xIsNext);
  };

  renderHistory = (step, move) => <HistoryItem key={`item-${move}`} move={move} handler={this.jumpTo} />;

  render() {
    const { history, stepNumber, xIsNext } = this.props;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className={styles.game}>
        <Board squares={current.squares} onClick={this.handleClick} />
        <div className={styles.info}>
          <div>{status}</div>
          <ol>{history.map(this.renderHistory)}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  makeMove: PropTypes.func.isRequired,
  makeJump: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
});

const mapDispatchToProps = dispatch => ({
  makeMove: (history, squares, xIsNext) => dispatch(Actions.makeMove(history, squares, xIsNext)),
  makeJump: (stepNumber, xIsNext) => dispatch(Actions.makeJump(stepNumber, xIsNext))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
