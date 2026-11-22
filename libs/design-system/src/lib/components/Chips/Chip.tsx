import { HTMLProps } from 'react';

import styles from './chips.module.css';

const Chip = ({ children, ...rest }: HTMLProps<HTMLLIElement>) => {
  return (
    <li {...rest} className={styles['chip']}>
      {children}
    </li>
  );
};

export default Chip;
