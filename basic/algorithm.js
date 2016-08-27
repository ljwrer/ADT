/**
 * Created by Ray on 2016/7/4.
 */
"use strict";
const Timer=require('../util/timer');
const seed=require('../util/seed');
const maxSubSeqSum1=function (A,N) {
    let max=0;
    for(let i=0;i<N;i++){
        for(let j=i;j<N;j++){
            let sum=0;
            for(let k=i;k<=j;k++){
                sum+=A[k];
                if(sum>max){
                    max=sum
                }
            }
        }
    }
    return max;
};
const maxSubSeqSum2=function (A,N) {
    let max=0;
    for(let i=0;i<N;i++){
        let sum=0;
        for(let j=i;j<N;j++){
            sum+=A[j];
            if(sum>max){
                max=sum
            }
        }
    }
    return max;
};
const maxSubSeqSum3=function (A,N) {
    const lookForMaxSubSeq=function(arr,left,right){
        if(left===right){
            if(arr[left]>0){
                return arr[left]
            }else {
                return 0
            }
        }
        const center=Math.floor((left+right)/2);
        let centerLeftSubSeqSum=0;
        let centerLeftMaxSubSeqSum=0;
        for(let i=center;i>=left;i--){
            centerLeftSubSeqSum+=arr[i];
            if(centerLeftMaxSubSeqSum<centerLeftSubSeqSum){
                centerLeftMaxSubSeqSum=centerLeftSubSeqSum;
            }
        }
        let centerRightSubSeqSum=0;
        let centerRightMaxSubSeqSum=0;
        for(let i=center+1;i<=right;i++){
            centerRightSubSeqSum+=arr[i];
            if(centerRightMaxSubSeqSum<centerRightSubSeqSum){
                centerRightMaxSubSeqSum=centerRightSubSeqSum;
            }
        }
        let centerMaxSubSeqSum=centerLeftMaxSubSeqSum+centerRightMaxSubSeqSum;
        const leftMaxSubSeqSum=lookForMaxSubSeq(arr,left,center);
        const rightMaxSubSeqSum=lookForMaxSubSeq(arr,center+1,right);
        let maxSubSeqSum=Math.max(leftMaxSubSeqSum,rightMaxSubSeqSum);
        maxSubSeqSum=Math.max(maxSubSeqSum,centerMaxSubSeqSum);
        return maxSubSeqSum;
    };
    return lookForMaxSubSeq(A,0,N-1);
};
/*
*       T(1)=O(1)
*       N=pow(2,k)
*       T(N)=2T(N/2)+cN
*     =2*(2T(N/pow(2,2))+cN/2))+cN
*     =pow(2,2)*T(N/pow(2,2))+2*cN
*     =2pow(2,2)*T(N/pow(2,3))+3*cN
*     =pow(2,3)*T(N/pow(2,3))+3*cN
*     =pow(2,k)*T(1)+ckN
*     =NO(1)+cN*logN
*     =O(N*logN)
* */

const maxSubSeqSum4=function (A,N) {
    let sum=0,maxSum=0;
    for(let i=0;i<N-1;i++){
        sum+=A[i];
        if(sum<0){
            sum=0;
        }else if(sum>maxSum){
            maxSum=sum;
        }
    }
    return maxSum;
};

const arr=seed(1000,1000);
const argsForTest=[arr,arr.length];
const functionForTest=[maxSubSeqSum1,maxSubSeqSum2,maxSubSeqSum3,maxSubSeqSum4];
const nameForTest='maxSubSeqSum';
for(let i=0;i<4;i++){
    const timer=Object.create(Timer);
    timer.init({
        fn:functionForTest[i],
        name:nameForTest+(i+1),
        args:argsForTest
    });
    timer.go();
}

