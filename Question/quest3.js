// Given:
// [
// {name:"Irfan", age:22},
// {name:"Allen", age:15}
// ]
//  Return only names as an array.

const peopl=[
  {
    name:"Tousif",
    age:21
  },
  {
    name:"Rishi",
    age:24
  },
]
let emp=[];
for(let i=0;i<peopl.length;i++){
  emp[i]=peopl[i].name;
}
console.log(emp)