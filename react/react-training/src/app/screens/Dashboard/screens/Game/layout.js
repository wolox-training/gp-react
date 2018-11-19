import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { calculateWinner } from '@utils';

import Board from './components/Board/index';
import HistoryItem from './components/HistoryItem/index';
import styles from './styles.scss';

class Layout extends Component {
  makeJump = step => {
    const { makeJump } = this.props;
    makeJump(step);
  };

  renderHistory = (step, makeMove) => (
    <HistoryItem key={`item-${makeMove}`} makeJump={this.makeJump} makeMove={makeMove} />
  );

  render() {
    const { history, onClick, stepNumber, xIsNext } = this.props;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className={styles.game}>
        <h2 className={styles.title}>Tic Tac Toe</h2>
        <Board onClick={onClick} squares={current.squares} />
        <div className={styles.info}>
          <div>{status}</div>
          <ol>{history.map(this.renderHistory)}</ol>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  makeJump: PropTypes.func,
  onClick: PropTypes.func,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

export default Layout;
