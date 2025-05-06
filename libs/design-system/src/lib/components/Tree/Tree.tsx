import { PropsWithChildren } from 'react';
import styles from './tree.module.css';

const Tree = ({ children }: PropsWithChildren) => {
  return (
    <div role="list" className={styles['tree-root']}>
      {children}
    </div>
  );
};

export default Tree;
