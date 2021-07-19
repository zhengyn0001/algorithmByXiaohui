interface TreeNode{
    data:number;
    leftNode:TreeNode|null;
    rightNode:TreeNode|null;
    isCheckRight?:boolean;
}
// 创建二叉树，使用递归创建
function createBinaryTree(list:Array<number|null>):TreeNode|null{
    // 如果传进来的数组没有数据，返回null
    if(!(list&&list.length)){
        return null
    }
    let  node:TreeNode|null = null
    // list弹出第一个数据
    const data:number|null = list.shift() as number|null
    if(data!==null){
        node={
            data,
            leftNode : createBinaryTree(list),
            rightNode : createBinaryTree(list)
        }
    }
    return node
}
export default createBinaryTree