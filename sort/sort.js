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
const chooseSort = (array, compare) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (compare(array[i], array[j])) {
                switchElement.call(array, i, j);
                console.log(array)
            }
        }
    }
};
const arr = [45, 22, 11, 90, 76, 21, 12, 67];
shellSort(arr, (a, b) => a - b > 0);
module.exports = {
    bubbleSort,
    insertionSort,
    shellSort,
    heapSort,
    selectionSort
};
