/*
    Promise Chaining => Promise Chaining is a mechanism to execute multiple asynchronous operations one after another.
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Resolve after 2 seconds');
        resolve(56)
    }, 2000);
});

promise.then((value) =>{
    console.log(value)
    let promise1 = new Promise((resolve, reject) =>{
        resolve('promise1')
    })
    return promise1
}).then((value) => {
    console.log(value)
    let promise2 = new Promise((resolve, reject) =>{
        resolve('promise2')
    })
    return promise2
}).then((value) => {
    console.log(value)
})