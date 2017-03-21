/**
 * Created by Ray on 2017/3/21.
 */
const reverseLinkedList = function (list,times) {
    let count = 0;
    const len = list.Length();
    if(times&&len>2){
        let leftNode = list.head.next;
        let rightNode = leftNode.next;
        let tmp;
        while (count<times&&count<len-1){
            tmp = rightNode.next;
            rightNode.next = leftNode;
            leftNode = rightNode;
            rightNode = tmp;
            count ++;
        }
        list.head.next.next = rightNode;
        list.head.next = leftNode;
    }
    return list
};
module.exports = reverseLinkedList;
