interface TreeNode {
    data: number;
    leftNode?: TreeNode | null;
    rightNode?: TreeNode | null;
}
declare function createBinaryTreeByRecursion(list: Array<number | null>): TreeNode | null | undefined;
declare function preOrderTraveralByRecursion(node: TreeNode | null | undefined): null | undefined;
declare function inOrderTraveralByRecursion(node: TreeNode | null | undefined): null | undefined;
declare function postOrderTraveralByRecursion(node: TreeNode | null | undefined): null | undefined;
declare const treeByRecursion: TreeNode | null | undefined;
