// 用数组数实现二叉树
// 实现一个接口拥有data,leftNode,rightNode字段的对象
// // 通过递归实现
interface TreeNode{
    data:number|null;
    leftNode:TreeNode|null;
    rightNode:TreeNode|null;
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralByRecursion(node:TreeNode|null){
    if(node){
        console.log(node.data)
        preOrderTraveralByRecursion(node.leftNode)
        preOrderTraveralByRecursion(node.rightNode)
    }
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralByRecursion(node:TreeNode|null){
    if(node){
        inOrderTraveralByRecursion(node.leftNode)
        console.log(node.data)
        inOrderTraveralByRecursion(node.rightNode)
    }
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralByRecursion(node:TreeNode|null){
    if(node){
        postOrderTraveralByRecursion(node.leftNode)
        postOrderTraveralByRecursion(node.rightNode)
        console.log(node.data)
    }
}

export default {
    preOrderTraveralByRecursion,
    inOrderTraveralByRecursion,
    postOrderTraveralByRecursion
}