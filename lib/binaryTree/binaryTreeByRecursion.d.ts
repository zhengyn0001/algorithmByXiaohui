interface TreeNode {
    data: number | null;
    leftNode: TreeNode | null;
    rightNode: TreeNode | null;
}
declare function createBinaryTreeByRecursion(list: Array<number | null>): TreeNode | null;
declare function preOrderTraveralByRecursion(node: TreeNode | null): void;
declare function inOrderTraveralByRecursion(node: TreeNode | null): void;
declare function postOrderTraveralByRecursion(node: TreeNode | null): void;
declare const _default: {
    createBinaryTreeByRecursion: typeof createBinaryTreeByRecursion;
    preOrderTraveralByRecursion: typeof preOrderTraveralByRecursion;
    inOrderTraveralByRecursion: typeof inOrderTraveralByRecursion;
    postOrderTraveralByRecursion: typeof postOrderTraveralByRecursion;
};
export default _default;
