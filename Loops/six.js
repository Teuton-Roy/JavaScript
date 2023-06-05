
const coding = ['C/C++','Java','Python','JavaScript','Go']

//for-each loop do not return value.
// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item;
// })
// console.log(values);



//for return value.. we using filter.

const myNums= [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num)=>{
    // if(num > 5){
    //     return num;
    // }

    return num > 5
})
console.log(newNums);