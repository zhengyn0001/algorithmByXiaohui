// 创建二叉树，使用递归创建
function createBinaryTreeByRecursion(list) {
    var node = null;
    if (!(list && list.length)) {
        return null;
    }
    var data = list.shift();
    console.log('data', data);
    if (data !== null) {
        node = { data: data };
        node.leftNode = createBinaryTreeByRecursion(list);
        node.rightNode = createBinaryTreeByRecursion(list);
    }
    return node;
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralByRecursion(node) {
    if (!node) {
        return null;
    }
    console.log(node.data);
    preOrderTraveralByRecursion(node.leftNode);
    preOrderTraveralByRecursion(node.rightNode);
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralByRecursion(node) {
    if (!node) {
        return null;
    }
    inOrderTraveralByRecursion(node.leftNode);
    console.log(node.data);
    inOrderTraveralByRecursion(node.rightNode);
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralByRecursion(node) {
    if (!node) {
        return null;
    }
    postOrderTraveralByRecursion(node.leftNode);
    postOrderTraveralByRecursion(node.rightNode);
    console.log(node.data);
}
var treeByRecursion = createBinaryTreeByRecursion([3, 2, 9, null, null, 10, null, null, 8, null, 4]);
console.log('tree:', treeByRecursion);
preOrderTraveralByRecursion(treeByRecursion);
console.log('中序遍历:');
inOrderTraveralByRecursion(treeByRecursion);
console.log('后序遍历:');
postOrderTraveralByRecursion(treeByRecursion);
