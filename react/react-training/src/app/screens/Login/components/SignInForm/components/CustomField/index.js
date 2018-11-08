import React from 'react';

import styles from '../../styles.scss';

const CustomField = props => {
  const { input, type, className, placeholder, meta } = props;
  return (
    <div className={styles.input}>
      <input {...input} type={type} className={className} placeholder={placeholder} />
      {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
    </div>
  );
};

export default CustomField;
