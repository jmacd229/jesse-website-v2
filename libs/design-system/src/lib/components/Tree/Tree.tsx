import { PropsWithChildren } from 'react';
import { treeRoot } from './Tree.styles';

const Tree = ({ children }: PropsWithChildren) => {
  return <ul className={treeRoot}>{children}</ul>;
};

export default Tree;
