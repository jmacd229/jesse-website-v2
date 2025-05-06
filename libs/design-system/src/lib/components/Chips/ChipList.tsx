import { HTMLProps, PropsWithChildren } from 'react';

import styles from './chips.module.css';

type ChipListProps = PropsWithChildren<HTMLProps<HTMLDivElement>>;

const ChipList = ({ children, className }: ChipListProps) => {
  return (
    <div role="list" className={`${styles['chip-list']} ${className}`}>
      {children}
    </div>
  );
};

export default ChipList;
