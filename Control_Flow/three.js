const userEmail = []

if (userEmail) {
    console.log(`This [${userEmail}] email present.`);
}
else{
    console.log(`No use email present.`);
}

//falsy value:-
//false, 0, -0, BigInt 0n, "", null, undefine, NaN

//truthy
//"0",'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log(`Array is empty`);
// }

//when we get empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}


//Nullish Coalescing Operator (??) : null and undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
// val1 = null ?? 20 ?? 30
// console.log(val1);

//Terniary Operator.. [condition ? true : false]
//Point to Noted, Terniary Operator and Nullish Coalescing Operator are not same..

const ice = 100
ice <= 80 ? console.log(`Less than 80`) : console.log(`More than 80`);

