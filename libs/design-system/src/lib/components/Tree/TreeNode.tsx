import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Badge, BadgeProps } from '../Badge/Badge';
import { treeNode, treeNodeContent } from './Tree.styles';

type TreeNodeProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    badge?: BadgeProps;
  }
>;

const TreeNode = ({ children, className, badge, ...rest }: TreeNodeProps) => {
  return (
    <li className={treeNode}>
      {badge && <Badge {...badge} />}
      <button
        type="button"
        className={`${className} ${treeNodeContent}`}
        {...rest}
      >
        {children}
      </button>
    </li>
  );
};

export default TreeNode;
