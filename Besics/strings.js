const name = "Teuton-Roy";
const age = 24; 

//concatination [old version]
console.log(name + age );

//concatination [new version]
// using backtick [``]

console.log(`Hello my name is ${name} and my age is ${age}.`);

//Another way to string declaration//
const myName = new String("Teuton-roy");

//new keyword means, using object of javascript//
//Behind it invocke the object//
console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf("t"));

//substring//
const newString = myName.substring(0,5)
console.log(newString);

//Slice//
const anotherString = myName.slice(-5, 3)
console.log(anotherString);

//String.prototype.trim()//
/*
    The trim() method removes whitespace from both ends of a string and returns a new string, 
    without modifying the original string.

    To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
*/

const myString = "    abc@gmail.com    "
console.log(myString);
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());


//Replace//

const url = "https://www.google.com/teuton%20roy";
url.replace("teuton%20roy", "teuton-roy");
/*
    1st parameter is the string to be replaced
    2nd parameter is the string to replace the first parameter
*/
console.log(url.replace("teuton%20roy", "teuton-roy"));


//Includes//
console.log(url.includes("teuton")); //check if the string is included in the url or not//


