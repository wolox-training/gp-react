import React, { Component } from 'react';

import { calculateWinner } from '@utils';

import Board from './components/Board/';
import HistoryItem from './components/HistoryItem/';
import styles from './styles.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  renderHistory = (step, move) => <HistoryItem key={`item-${move}`} move={move} handler={this.jumpTo} />;

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

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

export default Game;
