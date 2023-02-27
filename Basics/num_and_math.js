const score = 400 // js automatically detact score is Number type//
console.log(typeof(score)) 

//some time explisitly define that I want Number data-type//

const balance = new Number(100)
console.log(balance)

//convert toSting//
console.log(balance.toString());
console.log(balance.toString().length);

//set pression value//
console.log(balance.toFixed(2));


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));