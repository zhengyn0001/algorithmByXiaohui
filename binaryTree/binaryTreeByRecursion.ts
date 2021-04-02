// 用数组数实现二叉树
// 实现一个接口拥有data,leftNode,rightNode字段的对象
interface TreeNode{
    data:number;
    leftNode?:TreeNode;
    rightNode?:TreeNode;
}

// 创建二叉树，使用递归创建
function createBinaryTreeByRecursion(list:Array<number>):TreeNode{
    let  node:TreeNode = null
    if(!(list&&list.length)){
        return null
    }
    const data:number = list.shift()
    console.log('data',data)
    if(data!==null){
        node={data}
        node.leftNode = createBinaryTreeByRecursion(list)
        node.rightNode = createBinaryTreeByRecursion(list)
    }
    return node
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralByRecursion(node:TreeNode){
    if(!node){
        return null
    }
    console.log(node.data)
    preOrderTraveralByRecursion(node.leftNode)
    preOrderTraveralByRecursion(node.rightNode)
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralByRecursion(node:TreeNode){
    if(!node){
        return null
    }
    inOrderTraveralByRecursion(node.leftNode)
    console.log(node.data)
    inOrderTraveralByRecursion(node.rightNode)
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralByRecursion(node:TreeNode){
    if(!node){
        return null
    }
    postOrderTraveralByRecursion(node.leftNode)
    postOrderTraveralByRecursion(node.rightNode)
    console.log(node.data)
}
const treeByRecursion= createBinaryTreeByRecursion([3,2,9,null,null,10,null,null,8,null,4])
console.log('tree:',treeByRecursion)
preOrderTraveralByRecursion(treeByRecursion)
console.log('中序遍历:')
inOrderTraveralByRecursion(treeByRecursion)
console.log('后序遍历:')
postOrderTraveralByRecursion(treeByRecursion)