console.log("Hello, World!");
var v1=100;
console.log(v1)
console.log('v1='+v1)
console.log('type of v1='+typeof(v1))

var v2='Hello';
console.log('v2='+v2)
console.log('type of v2='+typeof(v2))


var v3=100;
console.log(`${v3}`)
var v4=100;
console.log(`${v4}`)

console.log(`next value of v3=${v3+1} `)
console.log(`next value of v4=${v4+1} `)
console.log(`Previous value of v3=${v3-1}  `)
console.log(`Previous value of v4=${v4-1}  `)   


var name="Tousif zzaman";
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());


var name="Tousif zzaman";
 console.log(`First Name: ${name.substr(0,name.indexOf(' '))}`);
console.log(`Last Name is: ${name.substr(name.lastIndexOf(' ')+1)}`);

var d= new Date();
console.log ( d.getDate());
console.log ( d.getMonth()+1 ); 
console.log ( d.getFullYear());
 console.log ( d.getHours());
console.log ( d.getMinutes());
console.log ( d.getSeconds());
console.log ( d.getDay()); 
console.log( d.toLocaleTimeString());

var v1=100;
var v2=100.00;
 if ( v1==v2) 
    console.log("Both are same");
else
    console.log("Not same");



var uname="kiran";
var pwd="kumar";
if ( uname=="kiran" && pwd=="kumar")
    console.log("Credentials found correct..");
else
    console.log("Invalid input credentials...");


var v1=100;         
var v2="100";       
if ( v1==v2)    
    console.log("Both are same");
else
    console.log("Not same");


// for (let i=1; i<=5; i++)
//     console.log(i);
// console.log(i)
var i=1;
do{
    console.log(i);
    i++;
}while ( i<=10 );


let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
   console.log(fruit);
}
for (let fruit in fruits) {
   console.log(fruit);
}




var items = ["pencil","eraser","sharpner","scale"];
 
console.log ( items );  
console.log ( items[0]);    
console.log ( items[1]);    
 
console.log ( items.length);    
console.log ( items[items.length-1]);   
console.log (`All items are: ${items}` );  
console.log ( `First item is: ${items[0]}`);    
console.log ( `Second item is: ${items[1]}`);    
console.log (`No. of items : ${items.length}`);    
console.log (`Last item is: ${items[items.length-1]}` );   
console.log ( items );
items.push("paper");  
console.log ( items);
items.splice(2,1,"rani");   
console.log ( items );
items.unshift("gum");       
console.log(items);

console.log ( items );
 
items.pop();  
console.log ( items);
items.splice(2,1);   
console.log ( items );
items.shift();       
console.log(items);







