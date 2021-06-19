// 创建二叉树，使用栈创建
function createBinaryTree(list) {
    var node = null;
    if (!(list && list.length)) {
        return null;
    }
    var data = list.shift();
    if (data !== null) {
        node = { data: data };
        node.leftNode = createBinaryTree(list);
        node.rightNode = createBinaryTree(list);
    }
    return node;
}
// （深度优先）前序遍历，根节点，左节点，右节点
function preOrderTraveralWidthStack(node) {
    if (!node) {
        return null;
    }
    var stack = [];
    var treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null) {
            console.log(treeNode.data);
            stack.push(treeNode);
            treeNode = treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            treeNode = treeNode.rightNode;
        }
    }
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralWidthStack(node) {
    if (!node) {
        return null;
    }
    var stack = [];
    var treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null) {
            stack.push(treeNode);
            treeNode = treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            console.log(treeNode.data);
            treeNode = treeNode.rightNode;
        }
    }
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralWidthStack(node) {
    if (!node) {
        return null;
    }
    var stack = [];
    var treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null) {
            stack.push(treeNode);
            treeNode = treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            var node_1 = treeNode.rightNode;
            // 如果没有右节点，打印根节点
            if (!treeNode.isCheckRight) {
                treeNode.isCheckRight = true;
                stack.push(treeNode);
                treeNode = node_1;
            }
            else {
                // 已经处理过右节点了，打印当前的节点
                console.log(treeNode.data);
                treeNode = null;
            }
        }
    }
}
var tree = createBinaryTree([3, 2, 9, null, null, 10, null, null, 8, null, 4]);
console.log('tree:', tree);
console.log('前序遍历:');
var preOrderTree = preOrderTraveralWidthStack(tree);
console.log('中序遍历:');
var inOrderTree = inOrderTraveralWidthStack(tree);
console.log('后序遍历:');
var postOrderTree = postOrderTraveralWidthStack(tree);
