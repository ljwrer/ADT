/**
 * Created by Ray on 2017/3/21.
 */
const assert = require('chai').assert;
const LinkedList = require('../linearStructure/LinkedList');
const reverseLinkedList = require('../app/reverseLinkedList');
const createLinkedList = function (count) {
    const list = new LinkedList();
    for(let i=1;i<=count;i++){
        list.insert(i,i)
    }
    return list
};
describe('linkedList',function () {
    describe('reverse',function () {
        it('should not be reverse when list is to short',function () {
            const list1 = createLinkedList(1);
            const result1 = reverseLinkedList(list1,10).toArray();
            assert.deepEqual(result1,[1])
        });
        it('should not be reverse when times is to short',function () {
            const list1 = createLinkedList(5);
            const result1 = reverseLinkedList(list1,0).toArray();
            assert.deepEqual(result1,[1,2,3,4,5])
        });
        it('should be reverse when times is full',function () {
            const list1 = createLinkedList(5);
            const result1 = reverseLinkedList(list1,4).toArray();
            assert.deepEqual(result1,[5,4,3,2,1])
        });
        it('should be reverse general',function () {
            const list1 = createLinkedList(5);
            const result1 = reverseLinkedList(list1,2).toArray();
            assert.deepEqual(result1,[3,2,1,4,5])
        });
    });
});
