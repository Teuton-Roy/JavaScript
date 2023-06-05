//How to use loop on Objects
//Using for-in loop
//syntax..
// for (const key in object) {
// }


// const myObject = {
//     js:"javascript",
//     cpp:"c/c++",
//     rb:"ruby"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


//for-in loop in Array..

const programming = ['C/C++', 'Java', 'JavaScript', 'Python','Go']
for (const key in programming) {
    // console.log(key); //just print Array key and Array-key mean's actually the Array-indexing
    console.log(`For index ${key} the value is: ${programming[key]}`);
}