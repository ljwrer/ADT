/**
 * Created by Ray on 2016/8/28.
 */
/*
* 只能使用头节点，尾节点删除有问题
* */
const LinkedList=require('./LinkedList');
/**
 * @description with LinkedList fulfilled
 */
class LinkStack{
    constructor(){
        this.data=new LinkedList();
    }
    isEmpty(){
        return this.data.Length()===0;
    }
    push(item){
        this.data.insert(item,1);
    }
    pop(item){
        if(this.isEmpty()){
            throw new Error("堆栈为空")
        }else {
            const topElement=this.data.FindKth(1).data;
            this.data.Delete(1);
            return topElement;
        }
    }
}
module.exports=LinkStack;
const stack=new LinkStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());

