"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 计算排序，用于一定范围内的整数排序，以索引为值，索引对应的值为重复的个数
function countSort(arrayList) {
    if (!(arrayList && arrayList.length))
        return arrayList;
    let array = [...arrayList];
    // 计算最大值和最小值
    let max = array[0];
    let min = array[0];
    const { length } = array;
    for (let i = 0; i < length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        else if (array[i] < min) {
            min = array[i];
        }
    }
    // 计算差值
    const diff = max - min;
    if (diff) {
        // 新建一个差值为0的数组
        const list = new Array(diff + 1).fill(0);
        let i = 0;
        // 1.将全部数据遍历，将值对应映射到数组
        for (; i < length; i++) {
            list[array[i] - min]++;
        }
        // 2.将全部数据遍历，计算每个索引最终出现的位置，为了可以保证位置的顺序
        i = 1;
        for (; i < length; i++) {
            list[i] += list[i - 1];
        }
        // 3.最后从最后开始遍历原始数据，因为最后的数字排序是最新的
        i = length - 1;
        const sortList = new Array(length).fill(min);
        for (; i >= 0; i--) {
            // 计算索引
            const index = array[i] - min;
            // 获取索引对应的值，当做新数组的排序
            sortList[list[index]] += index;
            list[index] -= 1;
        }
        return sortList;
    }
    return array;
}
exports.default = countSort;
