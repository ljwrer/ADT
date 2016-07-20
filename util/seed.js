/**
 * Created by Ray on 2016/7/11.
 */
"use strict";
const seed=function (range,amount) {
    let arr=[];
    for(let i=0;i<amount;i++){
        arr.push(Math.round((Math.random()-0.5)*2*range));
    }
    return arr;
};
module.exports=seed;
