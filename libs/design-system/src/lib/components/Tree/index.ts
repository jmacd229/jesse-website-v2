import TreeRoot from './Tree';
import TreeBranch from './TreeBranch';
import TreeNode from './TreeNode';

type TreeComponent = typeof TreeRoot & {
  Branch: typeof TreeBranch;
  Node: typeof TreeNode;
};

export const Tree = TreeRoot as TreeComponent;
Tree.Branch = TreeBranch;
Tree.Node = TreeNode;
