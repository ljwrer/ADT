/**
 * Created by Ray on 2017/3/1.
 */
/**
 * @typedef node for linkedList
 */
const Null = require('../util/empty').Null;
class LinkedNode extends Null{
    constructor(data,next=null) {
        super();
        this.data=data;
        this.next=next;
    }
}
module.exports = LinkedNode;
