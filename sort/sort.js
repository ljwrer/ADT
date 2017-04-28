/**
 * Created by Ray on 2017/4/6.
 */
const switchElement = function (i, j) {
    let cache = this[i];
    this[i] = this[j];
    this[j] = cache;
};
/**
 * O(N)->O(N2) 稳定  适合链表
 * @param array
 * @param compare
 */
const bubbleSort = (array, compare) => {
    for (let i = 0; i < array.length; i++) {
        let doSwitch = false;
        for (let j = 0; j < array.length - i; j++) {
            if (compare(array[j], array[j + 1])) {
                switchElement.call(array, j, j + 1);
                console.log(array);
                doSwitch = true
            }
        }
        if (!doSwitch) {
            break;
        }
    }
};
/**
 * O(N+I) 对基本有序序列较快
 * @param array
 * @param compare
 */
const insertionSort = (array, compare) => {
    let temp, i, j;
    for (i = 1; i < array.length; i++) {
        temp = array[i];
        for (j = i; j > 0 && compare(array[j - 1], temp); j--) {
            array[j] = array[j - 1]
        }
        array[j] = temp;
        console.log(array)
    }
};
const Sedgewick = function (amount) {
    const arr = [];
    let index = 1;
    let item = 1;
    while (item<amount){
        arr.unshift(item);
        item  = 9*Math.pow(4,index)-9*Math.pow(2,index)+1;
        index+=1;
    }
    return arr;
};
const shellSort = (array,compare) => {
    const sedgewickList = Sedgewick(array.length);
    for(let i=0;i<sedgewickList.length;i++){
        const d = sedgewickList[i];
        let temp, j, k;
        for (j = d; j < array.length; j++) {
            temp = array[j];
            for (k = j; k >= d && compare(array[k - d], temp); k-=d) {
                array[k] = array[k - d]
            }
            array[k] = temp;
            console.log(array)
        }
    }
};
const heapSort = function(array,compare){
    let heapSize = array.length;
    buildHeap(array);
    while (heapSize > 1) {
        heapSize--;
        switchElement.call(array,0,heapSize);
        heapify(array, heapSize, 0,compare);
    }
};
const buildHeap = function (array,compare) {
    console.log('building heap');
    const heapSize = array.length;
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, heapSize, i,compare);
    }
    console.log('heap created: ' + array.join());
};
const heapify = function (array, heapSize, i,compare) {
    const left = i * 2 + 1,
        right = i * 2 + 2;
    let largest = i;

    if (left < heapSize && compare(array[left],array[largest])) {
        largest = left;
    }

    if (right < heapSize && compare(array[right],array[largest])) {
        largest = right;
    }

    console.log('Heapify Index = ' + i + ' and Heap Size = ' + heapSize);

    if (largest !== i) {
        console.log('swap index ' + i + ' with ' + largest + ' (' + +array[i] + ',' + array[largest] + ')');
        switchElement.call(array, i, largest);
        console.log('heapify ' + array.join());
        heapify(array, heapSize, largest);
    }
};
const selectionSort = (array,compare) =>{
    let indexMin;
    for (let i=0; i<array.length-1; i++){
        indexMin = i;
        console.log('index ' + array[i]);
        for (let j=i; j<length; j++){
            if(compare(array[indexMin],array[j])){
                console.log('new index min ' + array[j]);
                indexMin = j;
            }
        }
        if (i !== indexMin){
            console.log('swap ' + array[i] + ' with ' + array[indexMin]);
            switchElement.call(array, i, indexMin);
        }
    }
};
const merge = (left,right,compare)=>{
    const result = [];
    let leftIndex = 0,
        rightIndex = 0;
    while (leftIndex<left.length&&rightIndex<right.length){
        if(compare(right[rightIndex],left[leftIndex])){
            result.push(left[leftIndex++])
        }else {
            result.push(right[rightIndex++])
        }
    }
    while (leftIndex<left.length){
        result.push(left[leftIndex++])
    }
    while (rightIndex<right.length){
        result.push(right[rightIndex++])
    }
    console.log(result);
    return result
};
const mergeSort = (array,compare)=>{
    if(array.length === 1) return array
    const mid = Math.floor(array.length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);
    return merge(mergeSort(left,compare),mergeSort(right,compare),compare)
};
const median3 = (array,compare) =>{
    const mid = Math.floor(array.length/2);
    if(compare(array[0],array[mid])){
        switchElement.call(array,0,mid)
    }
    if(compare(array[mid],array[array.length-1])){
        switchElement.call(array,mid,array.length-1)
    }
    if(compare(array[0],array[mid])){
        switchElement.call(array,0,mid)
    }
    return mid
};
const quickSort = (array,compare)=>{
    if(array.length<=1) return array;
    //TODO cutOff use insertionSort
    const mid = median3(array,compare);
    const median = array[mid];
    const left = [];
    const right = [];
    for(let i=0;i<array.length;i++){
        if(i === mid){
            continue
        }
        if(compare(median,array[i])){
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }
    array = quickSort(left,compare).concat([median,...quickSort(right,compare)])
    console.log(array);
    return array
};
const arr = [45, 22, 11, 90, 76, 21, 12, 67];
quickSort(arr, (a, b) => a - b > 0);
console.log(quickSort(arr, (a, b) => a - b > 0));
module.exports = {
    bubbleSort,
    insertionSort,
    shellSort,
    heapSort,
    selectionSort,
    mergeSort
};
