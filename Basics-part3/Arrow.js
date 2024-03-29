const User = {
    username : "Teuton Roy",
    price: '299',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this) //show current context..
    }
    /*
        Within this scope, for access every veriable we use [this.] keyword  
        [this.] keyword use for current values
    */
}
// User.welcomeMessage() //this welcome message for Teuton

// User.username = 'laura' //here, I change the username context/value
// User.welcomeMessage() //now,this welcome message for laura

// console.log(this); 
/*
    here the out is empty object cause, in global there is no object..
    
    it return the empty object cause it execute in node platform,
    if we execute in our browser console then it gives some output...
*/



// function cigratte (){
//     const userName = 'Teuton Roy'
//     console.log(this.userName);   it gives undefine, so [this.] keyword can't use in function..
// }
// cigratte()


// const cigratte = function(){
//     const userName = 'Teuton Roy'
//     console.log(this.userName);     here also gives undefine
// }
// cigratte()


//Defination of arrow function...
// const bidi = () => {
// }

// const sutta = () => {
//     let name = 'Teu'       
//     console.log(this.name);   //Inside Arroe () => {} function aslo can't use the [this.] keyword
// }
// sutta()


//Basic Arrow function syntax..
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(5,6));

//Implicite arrow function
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)
//console.log(addTwo(5,6));


// const output = () => {username:'teuton'} //within {} brackets can't return objects
// console.log(output());      

const output = () => ({username:'teuton'}) //for return object ({}) we need to wrap with paranthisis..
console.log(output());