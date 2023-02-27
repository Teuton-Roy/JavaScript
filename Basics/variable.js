/* 
In javascript Variable declearation keywords "let","var".
Constant declear through "const".
When we use this keywords simply assign into memory.
*/


//-----------------------------------------------------------------------------------------------------------------------------------//

//const//

const AccountId = 37289760693
/*
AccountId = 9554221004183

    AccountId = 9554221004183
          ^
[TypeError: Assignment to constant variable] This type of error we can see if we try to change the {const} variable.
Cause it's constant means can't be changed in second time.
*/
console.log(AccountId);


// ----------------------------------------------------------------------------------------------------------------------------------//

//let//

let AccountEmail = 'TeutonRoy@google.com';
// console.log(AccountEmail); output--> TeutonRoy@google.com//
//change email id//
AccountEmail = "teuton@google.com";
//now print//
console.log(AccountEmail);
/*
    Using {let} variable we can change the value
*/


//---------------------------------------------------------------------------------------------------------------------------------//

//var//

var AccountPassword = '9041';
// console.log(AccountPassword); output-->9041//
//change the password//
AccountPassword = '1234';
//now print//
console.log(AccountPassword);

//using {var} variable we can change the value

/*
    Here we can see that, using these {let}{var} we can change the variable simply🤔🤔😕
    So, Why we use {let} and why not {var} ???
</Ans->
    point 1:- [var] doesn't support Block-Scope means if A developer declear a veriable using var(var AccountPassword ='1234') and another developer use any condition and
    somehow the variable name is same then the change happen in every variable.

        Using {let} we comeover this situation.

    SO-->
    we prefer not to use var
    Because, of issue in Block-Scope and Functional-Scope   
*/






//---------------------------------------------------------------------------------------------------------------------//
//In JS, we can reserve any variable in memory without using {const}{var}{let}//
//Because, we can say it is safe language or flexible language//

AccountCity = 'Haldibari'
AccountCity = 'Jalpaiguri'
console.log(AccountCity);

//--------------------------------------------------------------------------------------------------------------------//

//In JS, if we simply declear a variable and not assign any value then the output is [undefined]
let AccountState;
console.log(AccountState);

//--------------------------------------------------------------------------------------------------------------------//

//now print all info//
console.table([AccountId, AccountEmail, AccountPassword, AccountCity, AccountState]);
//using this (table) keyword we can print our all information in a table form//
