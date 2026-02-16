var e1={id:1, ename:"Allen", job:"Trainer", salary:5500};
 
console.log ( e1.id );
console.log ( e1.ename);
console.log ( e1.job );
console.log ( e1.salary);
var employees = [
    {id:201,ename:"Allen",job:"Admin",salary:12000},
    {id:202,ename:"Bobby",job:"Programmer",salary:15000},
    {id:203,ename:"Cathe",job:"Trainer",salary:21000},
    {id:204,ename:"David",job:"Developer",salary:18000}
];

   for ( var i=0 ; i<employees.length ; i++ )
    console.log ( employees[i].id+" "+employees[i].ename+" "+employees[i].job+ " "+employees[i].salary);

   for ( let e of employees){
    for ( var i in e ){
        console.log(`${i} = ${e[i]}`);
    }
    console.log("----------------------------------------------------------------------------------------------------------");
}
function isZero(n){
    return n==0;
}
 
var n=9;
if ( isZero(n))
    console.log("Input is zero");
else
    console.log(`${n} is not zero`);



