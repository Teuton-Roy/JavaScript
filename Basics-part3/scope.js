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


//Nested Scope...

function one() {
    const username = 'Teuton Roy'

    function two() {
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website);  //cann't access here cause website access only inside the function two//

    two()
}
one()


if(true){
    const name ='Teuton'

    if(name === 'Teuton'){
        const website = ' youtube'
        console.log(name + website);
    }
    // console.log(website); //outside scope
}
// console.log(name); //outside scope



console.log(addone(5)); //before declaration we can use..

function addone(value){
    return value+1;
}


// addTwo(5) //before declaration we cann't use../
const addTwo = function(value){
    return value+2;
}

console.log(addTwo(5));
