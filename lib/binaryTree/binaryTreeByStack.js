"use strict";
// 创建二叉树，使用递归创建
function createBinaryTree(list) {
    if (!(list && list.length)) {
        return null;
    }
    let node = null;
    const data = list.shift();
    if (data !== null && data !== undefined) {
        node = { data };
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
    let stack = [];
    let treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null) {
            stack.push(treeNode);
            treeNode = treeNode && treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            treeNode = treeNode && treeNode.rightNode;
        }
    }
}
// （深度优先）中序遍历，左节点，根节点，右节点
function inOrderTraveralWidthStack(node) {
    if (!node) {
        return null;
    }
    let stack = [];
    let treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null) {
            stack.push(treeNode);
            treeNode = treeNode && treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            treeNode = treeNode && treeNode.rightNode;
        }
    }
}
// （深度优先）后序遍历，左节点，右节点,根节点
function postOrderTraveralWidthStack(node) {
    if (!node) {
        return null;
    }
    let stack = [];
    let treeNode = node;
    while (treeNode !== null || stack.length) {
        // 遍历左节点
        while (treeNode !== null && treeNode !== undefined) {
            stack.push(treeNode);
            treeNode = treeNode && treeNode.leftNode;
        }
        if (stack.length) {
            treeNode = stack.pop();
            const node = treeNode && treeNode.rightNode;
            // 如果没有右节点，打印根节点
            if (!treeNode.isCheckRight) {
                treeNode.isCheckRight = true;
                stack.push(treeNode);
                treeNode = node;
            }
            else {
                // 已经处理过右节点了，打印当前的节点
                console.log(treeNode.data);
                treeNode = null;
            }
        }
    }
}
const tree = createBinaryTree([3, 2, 9, null, null, 10, null, null, 8, null, 4]);
console.log('tree:', tree);
console.log('前序遍历:');
const preOrderTree = preOrderTraveralWidthStack(tree);
console.log('中序遍历:');
const inOrderTree = inOrderTraveralWidthStack(tree);
console.log('后序遍历:');
const postOrderTree = postOrderTraveralWidthStack(tree);
