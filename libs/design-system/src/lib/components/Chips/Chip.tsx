import { PropsWithChildren } from 'react';

import styles from './chips.module.css';

type ChipProps = PropsWithChildren;

const Chip = ({ children }: ChipProps) => {
  return <li className={styles['chip']}>{children}</li>;
};

export default Chip;
