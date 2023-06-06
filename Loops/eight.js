//reduce()

const myNums = [1,2,3]

const mytotal = myNums.reduce((acc, currval)=>{ //acc=accumulator & currval=currentValue
    console.log(`accumulator: ${acc} and currentValue: ${currval}`);
    return acc + currval
},3)
console.log(mytotal);