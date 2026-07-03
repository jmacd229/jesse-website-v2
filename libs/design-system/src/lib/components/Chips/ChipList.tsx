import { HTMLProps, PropsWithChildren } from 'react';

import styles from './chips.module.css';

type ChipListProps = PropsWithChildren<HTMLProps<HTMLUListElement>>;

const ChipList = ({ children, className }: ChipListProps) => {
  return (
    <ul className={`${styles['chip-list']} ${className}`}>{children}</ul>
  );
};

export default ChipList;
