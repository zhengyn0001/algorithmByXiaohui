// 用数组数实现二叉树
// 实现一个接口拥有data,leftNode,rightNode字段的对象
interface TreeNode{
    data:number;
    leftNode?:TreeNode|null;
    rightNode?:TreeNode|null;
    isCheckRight?:boolean;
}

// 创建二叉树，使用递归创建
function createBinaryTree(list:Array<number|null>):TreeNode|null{
    if(!(list&&list.length)){
        return null
    }
    let  node:TreeNode|null = null
    const data:number|null|undefined = list.shift()
    if(data!==null&&data!==undefined){
        node={data}
        node.leftNode = createBinaryTree(list)
        node.rightNode = createBinaryTree(list)
    }
    return node
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralWidthStack(node:TreeNode){
    if(!node){
        return null
    }
    let stack:Array<TreeNode|null|undefined> = []
    let treeNode:TreeNode|null|undefined = node
    while(treeNode!==null||stack.length){
        // 遍历左节点
        while(treeNode!==null){
            stack.push(treeNode)
            treeNode = treeNode&&treeNode.leftNode
        }
        if(stack.length){
            treeNode=stack.pop()
            treeNode=treeNode&&treeNode.rightNode
        }
    }
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralWidthStack(node:TreeNode){
    if(!node){
        return null
    }
    let stack:Array<TreeNode|null|undefined> = []
    let treeNode:TreeNode|null|undefined = node
    while(treeNode!==null||stack.length){
        // 遍历左节点
        while(treeNode!==null){
            stack.push(treeNode)
            treeNode = treeNode&&treeNode.leftNode
        }
        if(stack.length){
            treeNode=stack.pop()
            treeNode=treeNode&&treeNode.rightNode
        }
    }
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralWidthStack(node:TreeNode){
    if(!node){
        return null
    }
    let stack:Array<TreeNode> = []
    let treeNode:TreeNode|null = node
    while(treeNode!==null||stack.length){
        // 遍历左节点
        while(treeNode!==null&&treeNode!==undefined){
            stack.push(treeNode)
            treeNode = treeNode&&treeNode.leftNode
        }
        if(stack.length){
            treeNode=stack.pop()
            const node:TreeNode|null|undefined = treeNode&&treeNode.rightNode
            // 如果没有右节点，打印根节点
            if(!(treeNode as TreeNode).isCheckRight) {
                (treeNode as TreeNode).isCheckRight=true
                stack.push(treeNode)
                treeNode = node
            } else {
                // 已经处理过右节点了，打印当前的节点
                console.log(treeNode.data)
                treeNode=null
            }
        }
    }
}
const tree= createBinaryTree([3,2,9,null,null,10,null,null,8,null,4])
console.log('tree:',tree)
console.log('前序遍历:')
const preOrderTree = preOrderTraveralWidthStack(tree)
console.log('中序遍历:')
const inOrderTree = inOrderTraveralWidthStack(tree)
console.log('后序遍历:')
const postOrderTree = postOrderTraveralWidthStack(tree)