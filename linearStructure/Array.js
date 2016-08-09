/**
 * Created by Ray on 2016/7/25.
 */
"use strict";
const arr=[];
arr[0]=1;
arr[1023]=3;

function ArrayList() {
    return {

    }
}




function List() {
    return {
        head:null
    }
}
List.prototype.Length=function () {
    let i=0;
    let head=this.head;
    while (head){
        head=head.next;
        i++;
    }
    return i;
};
List.prototype.insert=function (data,index) {
    let i=0;
    let head=this.head;
    while (head&&index!==i){
        head=head.next;
        i++
    }
    const item={
        data:data,
        next:head.next
    }
    head.next=item;
};
module.exports={
    ArrayList,
    List
};
