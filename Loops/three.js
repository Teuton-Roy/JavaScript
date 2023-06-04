// (for-of) loop

//syntax..
// for (const iterator of object) { 
// iterator:- use normal variable,
// object:- here, object mean's - kar opr loop use krte chai..
// here no need to increment or decrement.
// autometically access every thing when loop need to start, when need to stop, object size every thing
// }

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = 'Hello World!'
// for (const greet of greetings) {
//     console.log(greet);
// }


//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('AUS', 'Australia')
map.set('Fr', 'France')
map.set('RUS', 'Russia')

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, ":", value);
// }


//objects are not iterable by for-of loop.. 
// const obj = {
//     'name':'Teuton',
//     'email':'teu@gmail.com'
// }
// for (const [key, value] of obj) {
//     console.log(key, ":", value);
// }
