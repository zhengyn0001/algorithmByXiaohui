import recursionBinaryTree from './binaryTree/binaryTreeByRecursion.js';
const treeList=[3, 2, 9, null, null, 10, null, null, 8, null, 4]
// 递归遍历二叉树
const treeByRecursion = recursionBinaryTree.createBinaryTreeByRecursion(treeList);
console.log('tree:', treeByRecursion);
console.log('前序遍历:');
recursionBinaryTree.preOrderTraveralByRecursion(treeByRecursion);
console.log('中序遍历:');
recursionBinaryTree.inOrderTraveralByRecursion(treeByRecursion);
console.log('后序遍历:');
recursionBinaryTree.postOrderTraveralByRecursion(treeByRecursion);
