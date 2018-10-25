import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  handleClick = () => {
    this.props.onClick(this.props.myI);
  };

  render() {
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  myI: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Square;
