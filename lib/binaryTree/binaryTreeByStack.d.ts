interface TreeNode {
    data: number;
    leftNode?: TreeNode | null;
    rightNode?: TreeNode | null;
    isCheckRight?: boolean;
}
declare function createBinaryTree(list: Array<number | null>): TreeNode | null;
declare function preOrderTraveralWidthStack(node: TreeNode): null | undefined;
declare function inOrderTraveralWidthStack(node: TreeNode): null | undefined;
declare function postOrderTraveralWidthStack(node: TreeNode): null | undefined;
declare const tree: TreeNode | null;
declare const preOrderTree: null | undefined;
declare const inOrderTree: null | undefined;
declare const postOrderTree: null | undefined;
