import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square/';
import styles from './styles.scss';

class Board extends Component {
  handleClick = i => {
    const { onClick } = this.props;
    onClick(i);
  };

  renderSquare = i => {
    const { squares } = this.props;
    return <Square value={squares[i]} squareNumber={i} onClick={this.handleClick} />;
  };

  render() {
    return (
      <div className={styles.board}>
        <div className={styles.status}>{status}</div>
        <div className={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  squares: PropTypes.string.isRequired
};

export default Board;
