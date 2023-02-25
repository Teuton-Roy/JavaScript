//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Two type of memory in JS
    1. Stack
    2. Heap

    Stack : Memory for primitive data type
        when we used stack memory, we can't change the value of variable
        Bacuse, we recieve the copy of the value in stack memory.
        
    Heap : Memory for reference data type
        when we used heap memory, we can change the value of variable
        Bacuse, we recieve the reference(change in original value) of the value in heap memory.
*/

//example of stack memory
let myName = "Teuton";

let anotherName = myName;
anotherName = "Roy"


console.log(anotherName);
console.log(myName);

//example of heap memory
let userOne = {
    email: "abcd@gmail.com",
    upi: "00000000000@upi",
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com",
userTwo.upi = "1234567890@upi"

console.log(userOne);
console.log(userTwo);