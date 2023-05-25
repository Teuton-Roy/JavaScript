//Functions

function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("u");
    console.log("T");
    console.log("O");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     /*
//         when we create function defination like:
//         function abc(){

//         }

//         If here in between () we pass anything it called Parameter, like:
//         function abc(parameter, parameter){

//         }
//     */ 

//     console.log(number1 + number2)
// }

// addTwoNumbers() return NaN Cause, noargument passing..
// addTwoNumbers(3, 7)
/*
    when we call the function then it's called Argument..
    addTwoNumbers(argument, argument)
*/


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return (num1+num2)
}
const result = addTwoNumbers(3, 5)
// console.log("Value of the result: "+ result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Jhat-k-bal, mujhe kaise pata chalega tera naam, laure naam dala kar chutiya sala..")
        return    
    }
    return `${userName}, you just logged in🙂`
}
// console.log(loginUserMessage("Teuton"))
// console.log(loginUserMessage("")) //this is empty string
console.log(loginUserMessage()) //this is undefined
