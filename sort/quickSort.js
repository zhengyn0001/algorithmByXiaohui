"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 分治法，将大于基准元素的放在右边，小于基准元素的放在左边
function partition(arr, startIndex, endIndex) {
    const pivot = arr[startIndex];
    let mark = startIndex;
    for (let i = startIndex + 1; i < endIndex; i++) {
        if (arr[i] < pivot) {
            mark++;
            const temp = arr[i];
            arr[i] = arr[mark];
            arr[mark] = temp;
        }
    }
    arr[startIndex] = arr[mark];
    arr[mark] = pivot;
    return mark;
}
// 快速排序，用单边循环法(从大到小排序)
function quickSort(arr, startIndex, endIndex) {
    // 如果开始的index大于等于endIndex,结束递归
    if (startIndex >= endIndex)
        return;
    // 获取基准元素
    const pivotIndex = partition(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
}
let arrList = [23, 2323, 11, 434, 99, 0, 12, 34, 89.2, 21, 46, -1, 334];
quickSort(arrList, 0, arrList.length - 1);
console.log('快速排序：', arrList);
exports.default = quickSort;
