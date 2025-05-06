import { PropsWithChildren } from 'react';

import styles from './chips.module.css';

type ChipProps = PropsWithChildren;

const Chip = ({ children }: ChipProps) => {
  return (
    <div role="listitem" className={styles['chip']}>
      {children}
    </div>
  );
};

export default Chip;
