/**
 * Created by Ray on 2017/4/17.
 */
const arr = [
    {
        key:'c'
    },
    {
        key:'d'
    },
    {
        key:'e'
    },
    {
        key:'b'
    },
    {
        key:'a'
    },
];
const table = [];
for(let i = 0;i<arr.length;i++){
    table[i] = i;
}
let j,temp;
for(let i = 1;i<table.length;i++){
    temp = table[i];
    for (j=i;j>0&&arr[table[j-1]].key>arr[temp].key;j--){
        table[j] = table[j-1]
    }
    table[j] = temp
}
arr.forEach(item=>{
    console.log(item)
})
console.log('---')
console.log(table)
const hasCircle = function (arr) {
    let ret = -1;
    arr.some((item,index)=>{
        if(item!==index){
            ret = index
            return true
        }
    })
    console.log(ret)
    return ret
}
const physicalSort = function () {
    let i = 0;
    while (hasCircle(table)>-1){
        i = hasCircle(table)
        let temp = arr[i];
        let end = i;
        while(table[i]!==i){
            const next = table[i];
            //move item
            arr[i] =  arr[next]
            //tag moved item
            table[i] = i;
            end = i;
            //do next move
            i = next;
        }
        arr[end] = temp
    }
};
physicalSort();
console.log(table)
console.log(arr)

