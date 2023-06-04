//How to use loop on Objects

const myObject = {
    js:"javascript",
    cpp:"c/c++",
    rb:"ruby"
}
for (const key in myObject) {
    console.log(myObject[key]);
}