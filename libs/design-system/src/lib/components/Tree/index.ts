import TreeRoot from './Tree';
import TreeNode from './TreeNode';

type TreeComponent = typeof TreeRoot & {
  Branch: typeof TreeRoot;
  Node: typeof TreeNode;
};

export const Tree = TreeRoot as TreeComponent;
Tree.Branch = TreeRoot;
Tree.Node = TreeNode;
