import recursionBinaryTree from './binaryTree/binaryTreeByRecursion';
import createBinaryTree from './binaryTree/createBinaryTree'
const tree= createBinaryTree([3,2,9,null,null,10,null,null,8,null,4])
console.log('通过递归生成的二叉树-tree:',tree)
console.log('前序遍历:')
recursionBinaryTree.preOrderTraveralByRecursion(tree)
console.log('中序遍历:')
recursionBinaryTree.inOrderTraveralByRecursion(tree)
console.log('后序遍历:')
recursionBinaryTree.postOrderTraveralByRecursion(tree)