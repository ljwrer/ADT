/**
 * Created by Ray on 2017/5/3.
 */
/**
 * hash(attrName) => number
 *
 *
 */
const table = new Array(26);
const hash = (str)=>{
    let h = new Uint32Array([0])[0];
    let i = 0;
    while (i<str.length){
        h = (h<<5)+str.charCodeAt(i++)
    }
    return Math.abs(h%table.length)
};
const keys = ['acos','define','float','exp','char','atan','ceil','floor'];
const set = function (key) {
    const h = hash(key);
    let i = 0;
    // 线性探测
    while(table[(h+i)%table.length]){
        if(i>table.length){
            throw Error('hashTable is full')
        }
        i++;
    }
    table[(h+i)%table.length] = key
};
const get = function (key) {
    const h = hash(key);
    let i = 0;
    while (table[(h+i)%table.length]!==key){
        if(i>table.length){
            return -1
        }
        i++;
    }
    return (h+i)%table.length
};
keys.forEach(set);
keys.forEach(function (key) {
    console.log(get(key))
});

