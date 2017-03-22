/**
 * Created by Ray on 2017/3/3.
 */
const assert = require('chai').assert;
const binarySearch = require('../tree/binarySearch');
const MaxHeap = require('../tree/MaxHeap');
const random = require('../util/random').int;
describe('tree',function () {
    describe('binarySearch',function () {
        let arr;
        beforeEach(function () {
            arr = [1,3,5,8,9,15];
        });
        it('should return -1 when the value is not present',function () {
            assert.equal(-1,binarySearch(arr,7))
        });
        it('should return index when the value is present',function () {
            assert.equal(2,binarySearch(arr,5))
        });
    });
    describe('heap',function () {
        describe('insert',function () {
            let arr =[];
            let heap = new MaxHeap(1000,100);
            for(let i=0;i<100;i++){
                arr.push(random(0,999))
            }
            arr.forEach(function (item) {
                heap.insert(item)
            });
            it('should insert max value on top',function () {
                for (let i=0;i+1<=heap.size;i++){
                    assert.isAtLeast(heap.elements[i],heap.elements[i*2]||-Infinity);
                    assert.isAtLeast(heap.elements[i],heap.elements[i*2+1]||-Infinity);
                }
            });
        });
        describe('deleteMax',function () {
            let arr =[];
            let heap = new MaxHeap(1000,100);
            for(let i=0;i<100;i++){
                arr.push(random(0,999))
            }
            arr.forEach(function (item) {
                heap.insert(item)
            });
            it('should return max value',function () {
                arr = arr.sort((a,b)=>b-a);
                const result = [];
                while(!heap.isEmpty()){
                    result.push(heap.deleteMax());
                }
                assert.deepEqual(result,arr);
            });
        });
        describe('create',function () {
            let arr =[];
            let heap = new MaxHeap(1000,100);
            for(let i=0;i<5;i++){
                arr.push(random(0,999))
            }
            heap.create(arr);
            it('should create max heap',function () {
                for (let i=0;i+1<=heap.size;i++){
                    assert.isAtLeast(heap.elements[i],heap.elements[i*2]||-Infinity);
                    assert.isAtLeast(heap.elements[i],heap.elements[i*2+1]||-Infinity);
                }
            })
        })
    })
})
