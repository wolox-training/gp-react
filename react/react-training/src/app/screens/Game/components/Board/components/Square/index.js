import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  handleClick = () => {
    const { myI, onClick } = this.props;
    onClick(myI);
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
  myI: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Square;
