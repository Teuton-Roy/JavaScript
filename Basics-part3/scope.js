//Global Scope
var c = 300

let a = 200


// Block Scope
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30; 

    console.log("Inner value: "+a);
}


// console.log(a);
// console.log(b);
console.log(a); //this the problem of the var 