"use strict";
exports.__esModule = true;
// 堆排序
// 将无序数组构建成二叉堆，要从小到大排序，就构建成最大堆，反之就是最小堆
// 循环删除堆顶的元素，插在最后面，调整堆形成新的堆顶
/**
 *
 * @param array 待调整的堆
 * @param index 要下沉的父节点
 * @param length 堆的有效大小
 */
function downAdjust(array, index, length, stb) {
    var char = stb ? '>' : '<';
    // 存储父节点的值
    var temp = array[index];
    // 父节点的索引
    var parentIndex = index;
    // 左子节点的索引
    var childIndex = parentIndex * 2 + 1;
    while (childIndex < length) {
        // 判断有右节点并且右节点大于左节点
        var result = array[childIndex + 1] > array[childIndex];
        if (!stb) {
            result = !result;
        }
        if (childIndex + 1 < length && result) {
            childIndex++;
        }
        result = temp >= array[childIndex];
        if (!stb) {
            result = !result;
        }
        // 如果父节点大于子节点，退出循环
        if (result)
            break;
        // 如果父节点小于子节点，交换位置
        array[parentIndex] = array[childIndex];
        parentIndex = childIndex;
        childIndex = parentIndex * 2 + 1;
    }
    array[parentIndex] = temp;
}
// 构建堆
function buildHeap(array, stb) {
    var length = array.length;
    var lastParentIndex = Math.floor((length - 2) / 2);
    for (var i = lastParentIndex; i >= 0; i--) {
        downAdjust(array, i, length, stb);
    }
}
/**
 *
 * @param array 排序的数组
 * @param stb 是否从大到小排序
 */
function heapSort(array, stb) {
    // 构建堆
    buildHeap(array, stb);
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        // 交换最后一个的位置和第一个的位置
        var temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        downAdjust(array, 0, i, stb);
    }
}
var arrayList = [23, 34, 1, 1, 20, 2, 9, 0, 90];
heapSort(arrayList, false);
console.log('heapSort', arrayList);
exports["default"] = heapSort;
