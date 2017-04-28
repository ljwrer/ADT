/**
 * Created by Ray on 2017/4/17.
 */
const arr = [
    {
        key:'f'
    },
    {
        key:'d'
    },
    {
        key:'c'
    },
    {
        key:'a'
    },
    {
        key:'b'
    },
    {
        key:'g'
    },
    {
        key:'h'
    },
    {
        key:'e'
    }
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
console.log('\r\n')
table.forEach(item=>{
    console.log(item)
});
const physicalSort = function () {
    let i = 0;
    let temp;
    let j = i;
    // while (true){
        temp = arr[table[j]];
        while(table[j]!==i){
            arr[j] =  arr[table[j]]
            j = table[j]
        }
        arr[j] = temp
    // }
};
physicalSort();
console.log(arr)
