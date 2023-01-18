//--------------------------- Conversion---------------------------//

let score = 10
// console.log(typeof score);
// console.log(typeof (score)); //declear as a method//


//---------------Convert into String to Number-----//
let num = "22"
console.log(typeof (num))
let StringToNumber = Number(num)
console.log(StringToNumber)
console.log(typeof (StringToNumber))

//-----Now if our number is like "22abc", then what heppend lets see-----//

let num1 = "22abc" //this is string but not a number// 
console.log(typeof(num1))

let StringToNumber1 = Number(num1)
console.log(typeof (StringToNumber1)); //In JavaScript, it convert into number//
console.log(StringToNumber1) //But, It diplay NaN mean's Not a Number//

//------------------------what if, our variable is [null]------------------//

let num2 = null
console.log(typeof (num2)) //This is object//

let ConvertNumber = Number(num2)
console.log(typeof (ConvertNumber)) //Now, this is number//
console.log(ConvertNumber); //But, output is [0]//

//------------------what if, our number is [undefined]------------------//

let num3 = undefined
console.log(typeof (num3)) //This is object//

let convertNumber = Number(num3) 
console.log(typeof(convertNumber)) //This is number//
console.log(convertNumber) //But,output is[NaN]//
//-----------------------------------------------------------------------------------//

// "22" => 22
// "22abc" => NaN
// null => 0
// undefined => NaN

//----------------------------------------------------------------------------------//

let isLogedIn = 1

let booleanisLogedIn = Boolean(isLogedIn)
console.log(booleanisLogedIn); //true//

let islogedIn = "" //empty string//

let booleanisLogedIn1 = Boolean(islogedIn)
console.log(booleanisLogedIn1); //false//

let islogedin = "Teuton" //string//

let booleanisLogedIn2 = Boolean(islogedin)
console.log(booleanisLogedIn2); //true//

// 1 => true; 0 => false
// " " => false
// "Teuton" => true

//---------------------------------------------------------------------------------//


//********************************************Operations***************************************//

let value = 3
let negval = -value
console.log(negval);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // double ** means, 2 to the power 3 = 8//
// console.log(2/3);
// console.log(5%3);


// let str1 = 'Teuton' 
// let str2 = ' Roy' 
// let str3 = str1 + str2
// console.log(str3);

console.log('1' + 2);//return 12
console.log(2 + '1');//return 21

console.log("1" + 2 + 2); //return 122
console.log(1 + 2 + "2"); // return 32 
//all happens for ToPrimitive//


//prefix and postfix//
 let gameCounter = 100
 gameCounter++;
 console.log(gameCounter);