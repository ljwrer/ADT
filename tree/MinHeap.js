/**
 * Created by Ray on 2017/3/22.
 */
const Null = require('../util/empty').Null;
/**
 * 最小堆
 * 完全二叉树，每个结点的元素值不大于其子结点的元素值
 */
class MinHeap extends Null {
    constructor(minData=-Infinity, capacity = 0) {
        super();
        this.elements = [];
        this.capacity = capacity;
        this.size = 0;
        this.maxData = minData;
        this.elements.push(minData);
    }

    switchElement(i, j) {
        const temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }

    insert(item) {
        if (this.isFull()) throw new Error('heap is full');
        this.elements[++this.size] = item;
        let i = this.size;
        while (this.elements[i] < this.elements[parseInt(i / 2)]&&i>0) {
            this.elements[i] = this.elements[parseInt(i / 2)];
            this.elements[parseInt(i / 2)] = item;
            i = parseInt(i / 2);
        }
    }

    isFull() {
        return this.size === this.capacity
    }

    isEmpty() {
        return this.size === 0
    }

    deleteMin() {
        if (this.size < 1) throw new Error('heap is empty');
        if (this.size === 1) {
            this.size = 0;
            return this.elements.pop();
        }
        const ret = this.elements[1];
        this.elements[1] = this.elements.pop();
        let i = 1;
        while (i * 2 <= this.size) {
            let child = 2 * i;
            if (child < this.size && this.elements[child] > this.elements[child + 1]) {
                child++
            }
            if (this.elements[i] > this.elements[child]) {
                this.switchElement(i, child);
                i = child
            } else {
                break;
            }
        }
        this.size--;
        return ret
    }
    siftDown(i){
        while (i * 2 <= this.size) {
            let child = i*2;
            if (child < this.size && this.elements[child] > this.elements[child + 1]) {
                child++
            }
            if (this.elements[i] > this.elements[child]) {
                this.switchElement(i, child);
                i = child
            } else {
                break;
            }
        }
    }
    create(list){
        this.elements.push(...list);
        this.size = list.length;
        let i = parseInt(this.size/2);
        while (i>0){
            this.siftDown(i);
            i--
        }
    }
}
module.exports = MinHeap;
