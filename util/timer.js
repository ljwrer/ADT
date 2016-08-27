/**
 * Created by Ray on 2016/6/13.
 */
"use strict";
const Timer={
    init:function ({fn,freq=1,name="unNamed function",args=[],ctx=null}) {
        if(!(typeof fn==="function")){
            throw new TypeError("fn should be a function");
        }
        this.test={fn,freq,name,args,ctx};
        return this;
    },
    exec:function () {
        const {freq,fn,ctx,args}=this.test;
        for(let i=1;i<=freq;i++){
            fn.apply(ctx,args)
        }
    },
    go:function () {
        const start=Date.now();
        this.exec();
        const end=Date.now();
        const time=end-start;
        const message=this.test.name+":"+time;
        console.log(message);
        return message;
    }
};
module.exports=Timer;
