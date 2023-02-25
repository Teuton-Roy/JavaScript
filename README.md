# JavaScript
A code repo for javascript


Using Codespace ----->
First Step, Create a new Repository on GitHub next go to code section and open Codespace.      
Second Step, Go to Files ->  View ->  Command Palette[ctrl+shift+P] & add Dev Container config file for nodejs.             
Third Step, Create our Hello_World.js program and run on terminal[ctrl+shift+`]. For run javascript files on codespace first write the directory then the file name.      
Example, [node Basics/Hello.js] =>  Besics is folder directory/ Hello.js  is  file of that folder. 

For Clear Terminal in codespace use [ctrl+L].

In JavaScript, for use newer version we simply write ["use strict";].


# how to access in object?

using (.)  

let userOne = {  
    email: "abcd@gmail.com",  
    upi: "00000000000@upi",  
}  

let userTwo = userOne;  

userTwo.email = "abc@gmail.com",  
userTwo.upi = "1234567890@upi"  

console.log(userOne);  
console.log(userTwo);  


# Stack and Heap memory in js?  
//example of stack memory  
let myName = "Teuton";  

let anotherName = myName;  
anotherName = "Roy"  


console.log(anotherName);  
console.log(myName);  
//Ouput:  
Roy  
Teuton  

//example of heap memory  
let userOne = {  
    email: "abcd@gmail.com",  
    upi: "00000000000@upi",  
}  

let userTwo = userOne;   

userTwo.email = "abc@gmail.com", //accessing//  
userTwo.upi = "1234567890@upi"  //accessing//   

console.log(userOne);  
console.log(userTwo);  
//Output:  
{ email: 'abc@gmail.com', upi: '1234567890@upi' }  
{ email: 'abc@gmail.com', upi: '1234567890@upi' }  



# String Concatination?  

older version is using (+)  
const name = "Teuton";  
const age = 24;  

//concatination [old version]  
console.log(name + age );  

New version of string concatination is using backtrick[``]....  

Benefits of using backtrick[``]: String interpolations.  
Means, we make placeholder in html forms whatever variables are there directly inject.  














