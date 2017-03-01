/**
 * Created by Ray on 2016/8/27.
 */
const Null = require('../util/empty').Null;
class Stack extends Null{
    constructor(maxSize){
        super();
        this.maxSize=maxSize;
        this.top=-1;
        this.data=[];
    }
    push(item){
        if(this.top===this.maxSize-1){
            throw new Error("堆栈满")
        }else{
            this.data[this.top++]=item;
        }
    }
    pop(){
        if(this.top===-1){
            throw new Error("堆栈为空");
        }else{
            return this.data[this.top--];
        }
    }
}
module.exports=Stack;
