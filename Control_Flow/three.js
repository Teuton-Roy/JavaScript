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