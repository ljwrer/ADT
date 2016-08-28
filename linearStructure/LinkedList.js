/**
 * Created by Ray on 2016/7/25.
 */
"use strict";
const arr=[];
arr[0]=1;
arr[1023]=3;

function LinkedNode(data) {
    this.data=data;
    this.next=null;
}

function LinkedList() {
    this.head=null;
}
LinkedList.prototype.Length=function () {
    let i=0;
    let head=this.head;
    while (head){
        head=head.next;
        i++;
    }
    return i;
};
LinkedList.prototype.FindKth=function (index) {
    let i=0;
    let head=this.head;
    let ret=null;
    while (head!=null&&i<index){
        head=head.next;
        i++;
    }
    if(i===index){
        ret =head;
    }
    return ret;
};
LinkedList.prototype.Find=function (item) {
    let i=0;
    let head=this.head;
    while (head!=null&&head.data!==item){
        head=head.next;
    }
    return head;
};
LinkedList.prototype.insert=function (data,index) {
    if(index===0){
        let node=new LinkedNode(data);
        this.head=node;
        return this.head;
    }else {
        const beforeNode=this.FindKth(index-1);
        if(beforeNode!==null){
            const node=new LinkedNode(data);
            node.next=beforeNode.next;
            beforeNode.next=node;
        }else{
            return null;
        }
    }
};
LinkedList.prototype.delete=function (index) {
    if(index===0){
        if(this.head!==null){
            this.head=this.head.next;
        }else {
            return null;
        }
    }
    const beforeNode=this.FindKth(index-1);
    if(beforeNode===null){
        throw new Error("没有找到索引",index-1)
    }else if(beforeNode.next===null){
        throw new Error("没有找到索引",index)
    }else {
        let deleteNode=beforeNode.next;
        beforeNode.next=deleteNode.next;
        deleteNode=null;
    }
};
module.exports=LinkedList;
let link1=new LinkedList();
link1.insert(0,0);
link1.insert(1,1);
link1.insert(2,2);
link1.insert(3,1);
link1.delete(1);

