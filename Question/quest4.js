// [
// {name:"Allen", age:22},
// {name:"Black", age:15},
// {name:"James", age:30}
// ]
//  Return users whose age is greater than 18..................................

let people=[
{
  name:"Allen",
  age:22
},
{
  name:"Black",
  age:15
},
{
  name:"James",
  age:78
}
]
let emp=[];
for(let i=0;i<people.length;i++){
  if(people[i].age>18){
    emp[i]=people[i].name
  }
 
}
console.log(emp)