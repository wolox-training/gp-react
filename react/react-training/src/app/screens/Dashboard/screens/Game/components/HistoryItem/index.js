import PropTypes from 'prop-types';
import React, { Component } from 'react';

class HistoryItem extends Component {
  handleClick = () => {
    const { makeJump, makeMove } = this.props;
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
  makeJump: PropTypes.func.isRequired,
  makeMove: PropTypes.number.isRequired
};

export default HistoryItem;
