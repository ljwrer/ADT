/**
 * Created by Ray on 2016/8/27.
 */
class DStack {
    constructor(maxSize){
        this.maxSize=maxSize;
        this.top1=-1;
        this.top2=maxSize;
        this.data=[];
    }
    push(item,tag){
        if(this.top1===this.top2-1){
            throw new Error("堆栈满")
        }else{
            if(tag===1){
                this.data[this.top1++]=item;
            }else if(tag===2){
                this.data[this.top2--]=item;
            }else {
                throw new Error("tag不存在")
            }
        }
    }
    pop(tag){
        if(tag===1){
            if(this.top1===-1){
                throw new Error("堆栈1空");
            }else {
                return this.data[this.top1--]
            }
        }else if(tag===2){
            if(this.top2===this.maxSize){
                throw new Error("堆栈2空");
            }else {
                return this.data[this.top2++]
            }
        }
    }
}
module.exports=DStack;
