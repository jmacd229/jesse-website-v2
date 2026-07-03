import { PropsWithChildren } from 'react';
import styles from './tree.module.css';

const TreeBranch = ({ children }: PropsWithChildren) => {
  return (
    <li className={styles['tree-branch']}>
      <ul className={styles['tree-root']}>{children}</ul>
    </li>
  );
};

export default TreeBranch;
