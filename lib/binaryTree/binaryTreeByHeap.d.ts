/**
 *
 * 父节点的索引是index的话，那么左/右节点的索引就是index*2+1/index*2+2
 */
declare function upAdjust(list: number[]): void;
declare function downAdjust(list: number[], parentIdex: number, length: number): void;
declare function buildHeap(list: number[]): void;
declare const list: number[];
