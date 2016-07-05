/**
 * Created by Ray on 2016/6/13.
 */
"use strict";
var a1=[],a2=[];
const printN1=function (n) {
    for(let i=1;i<=n;i++){
        a1.push(i)
    }
};
/**
 * f(x)={
 *      x>0 f(x-1)
 *      x<0 x
 * }
 * f(3)
 * f(2) log(3)
 * f(1) log(2) log(3)
 * f(0) log(1) log(2) log(3)
 */
const printN2=function (n) {
    if(n){
        printN2(n-1);
        a2.push(n);
    }
};
const timer=require('../util/timer');
// timer(printN1,100000,'printN1',100);
// timer(printN2,100000,'printN1',100);

//f(x)=a[0]+a[1]*x+...=
const poly1=function (factor,x) {
    let ret=0;
    for(let i=0;i<factor.length;i++){
        ret+=factor[i]*Math.pow(x,i);
    }
    return ret;
};
//(1...n)=(1+n)n/2   

const poly2=function (factor,x) {
    let p=factor[factor.length-1];
    for(let i=factor.length-2;i>=0;i--){
        p=p*x+factor[i]
    }
    return p
};
//1*n
const createFactor=function (length) {
    if(length>0){
        return createFactor(length-1).concat([length])
    }else {
        return [length]
    }
};
const factor1=createFactor(10000);
timer(poly1,1000,'poly1',[factor1,2]);
timer(poly2,1000,'poly2',[factor1,2]);

const poly3=function (x,n) {
    let p=1;
    for(let i=1;i<=n;i++){
        p+=Math.pow(x,i)/i;
    }
    return p;
};
const poly4=function (x,n) {
    let p=1/n;
    while (n>1){
        p=p*x+(1/--n);
    }
    return p;
}
timer(poly3,10000,'poly3',[2,100]);
timer(poly4,10000,'poly4',[2,100]);
