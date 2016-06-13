/**
 * Created by Ray on 2016/6/13.
 */
"use strict";
const timer=function (fn,frequency,name,args,ctx) {
    frequency=frequency?frequency:1;
    name=name?name:"function";
    ctx=ctx?ctx:null;
    args=Array.isArray(args)?args:[args];
    let start=Date.now();
    for(let i=0;i<frequency-1;i++){
        fn.apply(ctx,args)
    }
    let end=Date.now();
    console.log(name+":"+(end-start));
};
module.exports=timer;