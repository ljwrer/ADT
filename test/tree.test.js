/**
 * Created by Ray on 2017/3/3.
 */
const assert = require('chai').assert;
const binarySearch = require('../tree/binaryTree');
describe('tree',function () {
    describe('binarySearch',function () {
        const arr = [1,3,5,8,9,15];
        it('should return -1 when the value is not present',function () {
            assert.equal(-1,binarySearch(arr,7))
        });
        it('should return index when the value is present',function () {
            assert.equal(2,binarySearch(arr,5))
        });
    })
})
