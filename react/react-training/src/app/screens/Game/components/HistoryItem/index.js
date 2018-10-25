import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HistoryItem extends Component {
  handleClick = () => {
    this.props.handler(this.props.move);
  };

  render() {
    const description = this.props.move ? `Go to move #${this.props.move}` : 'Go to game start';
    return (
      <li key={this.props.key}>
        <button onClick={this.handleClick}>{description}</button>
      </li>
    );
  }
}

HistoryItem.propTypes = {
  key: PropTypes.string.isRequired,
  move: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default HistoryItem;
