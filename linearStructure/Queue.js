/**
 * Created by Ray on 2017/2/28.
 */
/*
* 循环队列队列满问题
* （1）使用额外标记Size记录数据长度或tag记录增删
* （2）仅使用n-1个数组空间
*
 */
class Queue{
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.front = 0;
        this.rear = 0;
        this.data = [];
    }
    isFull() {
        return (this.rear + 1) % this.maxSize === this.front
    }
    isEmpty() {
        return this.front === this.rear
    }
    addQ(data) {
        if(this.isFull()){
            console.log('队列已满');
        }else {
            this.rear = (this.rear + 1) % this.maxSize;
            this.data[this.rear] = data;
        }
    }
    deleteQ() {
        if(this.isEmpty()){
            console.log('队列空');
        }else {
            this.front = (this.front + 1) % this.maxSize;
            return this.data[this.front]
        }
    }
}
const q = new Queue(3);
q.addQ(1);
q.addQ(2);
q.addQ(3);
while (!q.isEmpty()){
    console.log(q.deleteQ())
}
