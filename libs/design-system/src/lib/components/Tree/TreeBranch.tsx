import { PropsWithChildren } from 'react';
import { treeBranch, treeRoot } from './Tree.styles';

const TreeBranch = ({ children }: PropsWithChildren) => {
  return (
    <li className={treeBranch}>
      <ul className={treeRoot}>{children}</ul>
    </li>
  );
};

export default TreeBranch;
