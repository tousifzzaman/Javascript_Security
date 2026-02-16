// [2,4,6]
//  Return a new array where each number is squared.

const num=[2,4,6]
const emptyarr=[];
for(let i=0;i<num.length;i++){
    emptyarr[i]=num[i]*num[i];
}
console.log(emptyarr)