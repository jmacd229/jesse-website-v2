import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styles from './tree.module.css';

type TreeNodeProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    badge?: ReactNode;
  }
>;

const TreeNode = ({ children, className, badge, ...rest }: TreeNodeProps) => {
  return (
    <li className={styles['tree-node']}>
      {badge}
      <button
        type="button"
        className={`${className} ${styles['tree-node-content']}`}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};

export default TreeNode;
