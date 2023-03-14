//Array//

const myArr = [0, 1, 2, 3, 4, -5]
const myHeros = ['iron-man', 'thor']

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// console.log(myArr[0]);
// console.log(myHeros[1]);

// console.log(myArr2[5]);

//Array Methods//
// 1. myArr.push() : add new elements add to the array//

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

//2. myArr.pop() :  no argument need, remove last value from the array.

// myArr.pop()
// console.log(myArr)

//3. myArr.unshife() : add new elements at the begining of the array.

// myArr.unshift(-1)
// console.log(myArr)  

//4. myArr.shift() : remove first element from the array.

// myArr.shift()
// console.log(myArr)

//5. myArr.includes() : check if the value is present in the array or not.

// console.log(myArr.includes(4))

//6. myArr.indexOf() : check the index of the value in the array.

// console.log(myArr.indexOf(9))

//7. myArr.join() : convert array to string.

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr);

//8. myArr.slice() : copy the array.

// const newArr = myArr.slice(0, 3)
// console.log(newArr);
// console.log('B', myArr);

//9. myArr.splice() : remove the element from the array.

console.log(myArr);
const newArr = myArr.splice(0, 3)
console.log('C', myArr);
console.log(newArr);