import { PropsWithChildren } from 'react';
import styles from './tree.module.css';

const TreeBranch = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles['tree-branch']} role="listitem">
      <div role="list" className={styles['tree-root']}>
        {children}
      </div>
    </div>
  );
};

export default TreeBranch;
