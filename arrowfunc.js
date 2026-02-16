const add=(a,b)=>a+b;
console.log(add(3,4));
const square=x=>x*x;
console.log(square(7))
const sayHello=()=>console.log("Hello Buddy")
sayHello();
const Multiply=(a,b)=>{
  let result=a*b;
  console.log("Inside Function")
  return result;
};
console.log(Multiply(10,20))



let  numbers=[1,2,3,4,5];
let squares=numbers.map(x=>x*x);
console.log(squares);


let fruits=["apple","banana","cherry"];
fruits.forEach(fruit=>console.log(fruit));