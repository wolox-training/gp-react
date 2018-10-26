import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  handleClick = () => {
    const { squareNumber, onClick } = this.props;
    onClick(squareNumber);
  };

  render() {
    const { value } = this.props;
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  squareNumber: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Square;
