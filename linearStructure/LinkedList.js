/**
 * Created by Ray on 2016/7/25.
 */
"use strict";
const empty = require('../util/empty');
/**
 * @typedef node for linkedList
 */
function LinkedNode(data,next=null) {
    this.data=data;
    this.next=next;
}
/**
 * @typedef linkedList
 */
function LinkedList() {
    this.head={next:null};
}
empty(LinkedList);
LinkedList.prototype.Length = function () {
    let i=0;
    let head=this.head;
    while (head.next){
        head=head.next;
        i++;
    }
    return i;
};
/**
 * @param index start from 1
 * @returns LinkedNode or null
 */
LinkedList.prototype.FindKth=function (index) {
    let i=0;
    let head=this.head;
    let ret=null;
    while (head.next!=null&&i<index){
        head=head.next;
        i++;
    }
    if(i===index){
        ret =head;
    }
    return ret;
};
/**
 * @returns {{next: null}|*|LinkedNode}
 */
LinkedList.prototype.Find=function (item) {
    let i=0;
    let head=this.head;
    while (head.next!=null&&head.next.data!==item){
        head=head.next;
    }
    return head;
};
LinkedList.prototype.insert=function (data,index) {
    if(index===1){
        let node=new LinkedNode(data,this.head.next);
        this.head.next=node;
        return this.head;
    }else {
        const beforeNode=this.FindKth(index-1);
        if(beforeNode!==null){
            const node=new LinkedNode(data,beforeNode.next);
            beforeNode.next=node;
        }else{
            return null;
        }
    }
};
LinkedList.prototype.Delete=function (index) {
    if(index===1){
        if(this.head.next!==null){
            this.head.next=this.head.next.next;
        }else {
            throw new Error("链表为空");
        }
    }else {
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
    }
};
module.exports=LinkedList;
let link1=new LinkedList();
link1.insert(1,1);
link1.insert(2,2);
link1.insert(3,1);
link1.Delete(1);

