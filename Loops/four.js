//How to use loop on Objects
//Using for-in loop
//syntax..
// for (const key in object) {
// }



const myObject = {
    js:"javascript",
    cpp:"c/c++",
    rb:"ruby"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}