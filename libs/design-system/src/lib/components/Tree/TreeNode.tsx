import { HTMLProps, PropsWithChildren } from 'react';
import styles from './tree.module.css';

const TreeNode = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) => {
  return (
    <div role="listitem" className={styles['tree-node']}>
      <div className={`${className} ${styles['tree-node-content']}`} {...rest}>
        {children}
      </div>
    </div>
  );
};

export default TreeNode;
