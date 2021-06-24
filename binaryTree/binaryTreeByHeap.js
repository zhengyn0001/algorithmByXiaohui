"use strict";
// 实现最小堆
// 二叉堆
/**
 *
 * 父节点的索引是index的话，那么左/右节点的索引就是index*2+1/index*2+2
 */
// 二叉堆的上浮调整（插入节点就用上浮调整，插入节点插在最后一个）
function upAdjust(list) {
    if (!list.length) {
        return;
    }
    let childIndex = list.length - 1;
    // 获取父节点的索引
    let parentIndex = (childIndex - 1) / 2;
    // 获取要调整位置的值，只要值小于父节点，就上浮
    let temp = list[childIndex];
    // 接下来只要子节点没有到最高并且子节点小于父节点，就会一直上浮
    while (childIndex > 0 && temp < list[parentIndex]) {
        list[childIndex] = list[parentIndex];
        childIndex = parentIndex;
        parentIndex = (parentIndex - 1) / 2;
    }
    list[childIndex] = temp;
}
// 二叉堆的下沉调整 list：存放堆的数组，parentIndex：要下沉的节点，length:堆的有效长度
function downAdjust(list, parentIdex, length) {
    if (!(list && list.length))
        return;
    let parentIndex = parentIdex;
    // 获取父节点的值
    const temp = list[parentIndex];
    // 获取子节点的索引
    let childIndex = parentIndex * 2 + 1;
    // 判断是否有子节点
    while (childIndex < length) {
        // 判断有右节点的话，并且右节点小于左节点，那么更新索引
        if (childIndex + 1 < length && list[childIndex + 1] < list[childIndex]) {
            childIndex++;
        }
        // 父节点和子节点比较，如果父节点小于子节点就退出循环
        if (temp <= list[childIndex])
            break;
        // 否则交换数据
        list[parentIndex] = list[childIndex];
        parentIndex = childIndex;
        childIndex = childIndex * 2 + 1;
    }
    list[parentIndex] = temp;
}
// 创建最小堆
function buildHeap(list) {
    //  从最后一个非叶子节点开始下沉
    const length = list.length;
    const lastUnLeafIndex = (length - 2) / 2;
    for (let i = lastUnLeafIndex; i >= 0; i--) {
        downAdjust(list, i, length);
    }
}
const list = [10, 678, 89, 1, 2, 0, 23, 67, 4, 3, 2, 100];
buildHeap(list);
console.log('最小堆', list);
