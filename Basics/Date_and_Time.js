//Dates

let myDate = new Date();
console.log(myDate.toString()); //Wed Mar 01 2023 22:59:34 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Wed Mar 01 2023
console.log(myDate.toISOString()); //2023-03-01T17:31:22.942Z
console.log(myDate.toJSON); //[Function: toJSON]
console.log(myDate.toLocaleString()); //3/1/2023, 10:31:22 PM
console.log(myDate.toLocaleDateString()); //3/1/2023
console.log(myDate.toLocaleTimeString()); //10:31:22 PM
console.log(myDate.toTimeString()); //22:31:22 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); //Wed, 01 Mar 2023 17:31:22 GMT
console.log(myDate.getTimezoneOffset()); //-330

console.log(typeof(myDate)); //object

//created own date//
myCreatedDate = new Date('2000, 3, 18')
//myCreatedDate = new Date(2000, 3, 18)

// for both myCreatedDate we got different result//

console.log(myCreatedDate.toDateString());