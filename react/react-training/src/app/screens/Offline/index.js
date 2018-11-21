import React from 'react';

import { OFFLINE_MESSAGE } from '@constants';

import offline from './assets/offline.png';
import styles from './styles.scss';

function Offline() {
  return (
    <div>
      <h2 className={styles.title}>{OFFLINE_MESSAGE}</h2>
      <p className={styles.text}>
        <img alt={OFFLINE_MESSAGE} className={styles.image} src={offline} />
      </p>
    </div>
  );
}

export default Offline;
