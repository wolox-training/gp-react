import React from 'react';

import { OFFLINE_MESSAGE } from '@constants';

import offline from './assets/offline.png';
import styles from './styles.scss';

function Offline() {
  return (
    <div>
      <h2 className={styles.title}>{OFFLINE_MESSAGE}</h2>
      <p className={styles.image}>
        <img alt={OFFLINE_MESSAGE} height={offline.height} src={offline} width={offline.width} />
      </p>
    </div>
  );
}

export default Offline;
