// 这个是冒泡排序的写法
function sort(array:number[]){
    const {length} = array;
    // 有序的边界，是从第几个元素开始是有序的
    let sortBorder:number = length-1
    // 最后一次交换的位置
    let lastExchangeIndex:number = 0
    for(let i = 0; i < length-1;i++){
        // 有序标记，如果到最后都没有进行交换的话，那么就是有序的
        let isSorted:boolean = true
        for(let j=0;j<sortBorder;j++){
            let temp: number=0
                // 如果当前值大于后面的值，交换位置
                if(array[j]>array[j+1]){
                 temp = array[j]
                 array[j] = array[j+1]
                 array[j+1] = temp
                //  有进行交换，所以不是有序的
                 isSorted=false
                 lastExchangeIndex=j
                }
        }
        sortBorder= lastExchangeIndex
        if(isSorted){
            break
        }

    }
}

// 还有一个鸡尾酒排序没有实现
let arr=[2,3,23,434.4243,898.2,223,22,34,34,90]
sort(arr)
console.log('冒泡sort:',arr)