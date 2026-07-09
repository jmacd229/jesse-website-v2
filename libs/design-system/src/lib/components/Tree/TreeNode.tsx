import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Badge, BadgeProps } from '../Badge/Badge';
import styles from './tree.module.css';

type TreeNodeProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    badge?: BadgeProps;
  }
>;

const TreeNode = ({ children, className, badge, ...rest }: TreeNodeProps) => {
  return (
    <li className={styles['tree-node']}>
      {badge && <Badge {...badge} />}
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
