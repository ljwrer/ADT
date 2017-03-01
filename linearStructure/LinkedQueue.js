/**
 * Created by Ray on 2017/2/28.
 * 单向链表只能使用头节点，类似堆栈
 */
const Null = require('../util/empty').Null;
const LinkedList = require('./LinkedList');
const LinkedNode = require('./LinkedNode');
class InfiniteLinkedQueue extends Null{
    constructor() {
        super();
        this.data = new LinkedList();
        this.front = this.data.head;
        this.rear = this.data.head;
    }

    isEmpty() {
        return this.front === this.rear
    }

    addQ(data) {
        this.rear.next = new LinkedNode(data);
        this.rear = this.rear.next;
    }

    deleteQ() {
        if (this.isEmpty()) {
            console.log('队列空');
        } else {
            const ret = this.front.next.data;
            this.front = this.front.next;
            return ret;
        }
    }
}
const q = new InfiniteLinkedQueue();
q.addQ(1);
q.addQ(2);
q.addQ(3);
while (!q.isEmpty()){
    console.log(q.deleteQ())
}
