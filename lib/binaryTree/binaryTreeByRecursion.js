// 创建二叉树，使用递归创建
function createBinaryTreeByRecursion(list) {
    // 如果传进来的数组没有数据，返回null
    if (!(list && list.length)) {
        return null;
    }
    let node = null;
    // list弹出第一个数据
    const data = list.shift();
    if (data !== null) {
        node = {
            data,
            leftNode: createBinaryTreeByRecursion(list),
            rightNode: createBinaryTreeByRecursion(list)
        };
    }
    return node;
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralByRecursion(node) {
    if (node) {
        console.log(node.data);
        preOrderTraveralByRecursion(node.leftNode);
        preOrderTraveralByRecursion(node.rightNode);
    }
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralByRecursion(node) {
    if (node) {
        inOrderTraveralByRecursion(node.leftNode);
        console.log(node.data);
        inOrderTraveralByRecursion(node.rightNode);
    }
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralByRecursion(node) {
    if (node) {
        postOrderTraveralByRecursion(node.leftNode);
        postOrderTraveralByRecursion(node.rightNode);
        console.log(node.data);
    }
}
export default {
    createBinaryTreeByRecursion,
    preOrderTraveralByRecursion,
    inOrderTraveralByRecursion,
    postOrderTraveralByRecursion
};
