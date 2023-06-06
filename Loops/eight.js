//reduce()

// const myNums = [1,2,3,4,6,7,8,9,10]

// const mytotal = myNums.reduce((acc, currval)=>{ //acc=accumulator & currval=currentValue
//     console.log(`accumulator: ${acc} and currentValue: ${currval}`);
//     return acc + currval
// },0)

// console.log(mytotal);


const shoppingCart = [
    {
        itemName:'white shirt',
        price:499
    },
    {
        itemName:'Black formal jeans',
        price:889
    },
    {
        itemName:'Black formal shoes',
        price:1299
    }
]

const Total_Price = shoppingCart.reduce((acc, currval)=>{
    let money = currval.price
    console.log(`accumulator: ${acc} and currentValue: ${currval.price}`);
    return acc + money
},0)
console.log(`Your total price: ${Total_Price}`);