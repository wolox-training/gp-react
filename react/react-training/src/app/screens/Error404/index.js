import React from 'react';

import { ERROR_404 } from '@constants';

import cry from './assets/404.png';
import styles from './styles.scss';

function Error404() {
  return (
    <div>
      <h2 className={styles.title}>{ERROR_404}</h2>
      <p className={styles.image}>
        <img alt={ERROR_404} height={cry.height} src={cry} width={cry.width} />
      </p>
    </div>
  );
}

export default Error404;
