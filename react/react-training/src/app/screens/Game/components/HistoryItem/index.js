import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HistoryItem extends Component {
  handleClick = () => {
    const { move, handler } = this.props;
    handler(move);
  };

  render() {
    const { move } = this.props;
    const description = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li>
        <button onClick={this.handleClick}>{description}</button>
      </li>
    );
  }
}

HistoryItem.propTypes = {
  move: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default HistoryItem;
