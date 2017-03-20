/**
 * Created by Ray on 2017/3/3.
 */
/*
 *   n个结点的判定树深度 log(n)+1
 *   ASL
 *
 */
const binarySearch = (table, item) => {
    let start = 0;
    let end = table.length - 1;
    let mid = Math.floor((start+end)/2);
    while (start<=end){
        const midItem = table[mid];
        if(item>midItem){
            start = mid+1;
        }else if(item<midItem){
            end = mid-1;
        }else {
            return mid
        }
        mid = Math.floor((start+end)/2)
    }
    return -1
};
module.exports = binarySearch;
