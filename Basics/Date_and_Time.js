//Dates

let myDate = new Date();
console.log(myDate.toString()); //Wed Mar 01 2023 22:59:34 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Wed Mar 01 2023
console.log(myDate.toISOString()); //2023-03-01T17:31:22.942Z
console.log(myDate.toJSON()); //2023-03-01T17:59:47.977Z
console.log(myDate.toLocaleString()); //3/1/2023, 10:31:22 PM
console.log(myDate.toLocaleDateString()); //3/1/2023
console.log(myDate.toLocaleTimeString()); //10:31:22 PM
console.log(myDate.toTimeString()); //22:31:22 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); //Wed, 01 Mar 2023 17:31:22 GMT
console.log(myDate.getTimezoneOffset()); //-330
console.log(typeof(myDate)); //object

//created own date//
myCreatedDate = new Date('2000, 1, 18')
myCreatedDate2 = new Date(2000, 0, 18)

// for both myCreatedDate we got different result//

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());


//time stamp//
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

// get

let mydate = new Date();
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(myDate.getTime());
console.log(myDate.getFullYear());

// console.log(`${mydate.getDate()} is the date`);

mydate.toLocaleString('default', {
    weekday:"long"
})

