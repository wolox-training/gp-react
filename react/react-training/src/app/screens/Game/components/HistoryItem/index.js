import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HistoryItem extends Component {
  handleClick = () => {
    const { makeMove, makeJump } = this.props;
    makeJump(makeMove);
  };

  render() {
    const { makeMove } = this.props;
    const description = makeMove ? `Go to move #${makeMove}` : 'Go to game start';
    return (
      <li>
        <button onClick={this.handleClick}>{description}</button>
      </li>
    );
  }
}

HistoryItem.propTypes = {
  makeMove: PropTypes.number.isRequired,
  makeJump: PropTypes.func.isRequired
};

export default HistoryItem;
