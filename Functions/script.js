console.log('hi');
oifngo
ognogno
ongfon
console.log('hi')

/* Two console.log() are in different places and every time I change one I need make sure  
    I update the other one this is the perfect use-case of function().  

    Because, A function() in javascript all it does take some type of logic so console.log('hi')
    too and it just puts that inside of a particular piece of code that you can run whenever you want
    and it always going to do the same thing every single time.
*/

function sayHi() {
    console.log('Hello')
    console.log('Teuton');
}

//calling function
sayHi()

//function Argument
function sum(a, b) {
    console.log(a + b);
    console.log(b);
}

sum(56, 29)

//function return
function sum(a,b){
    return a + b
    console.log("Never will run")
}

const sumValue = sum(2, 5)
console.log(sumValue);

