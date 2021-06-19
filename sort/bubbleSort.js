// 这个是冒泡排序的写法
function sort(array) {
    var length = array.length;
    // 有序的边界，是从第几个元素开始是有序的
    var sortBorder = length - 1;
    // 最后一次交换的位置
    var lastExchangeIndex = 0;
    for (var i = 0; i < length - 1; i++) {
        // 有序标记，如果到最后都没有进行交换的话，那么就是有序的
        var isSorted = true;
        for (var j = 0; j < sortBorder; j++) {
            var temp = 0;
            // 如果当前值大于后面的值，交换位置
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                //  有进行交换，所以不是有序的
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if (isSorted) {
            break;
        }
    }
}
var arr = [2, 3, 23, 434.4243, 898.2, 223, 22, 34, 34, 90];
sort(arr);
console.log('冒泡sort:', arr);
