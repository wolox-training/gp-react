import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.scss';

export class CustomField extends Component {
  render() {
    const { input, type, className, placeholder, meta } = this.props;
    return (
      <div className={styles.input}>
        <input {...input} type={type} className={className} placeholder={placeholder} />
        {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
      </div>
    );
  }
}

CustomField.propTypes = {
  className: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
