//About Singleton Pattern..
//Declare object using Constructor..


// const myapp = {} // non-singleton pattern..


const myappUser = new Object() //Singleton Pattern..
myappUser.id = "@xyz1"
myappUser.name = "Teuton Roy"
myappUser.isLoggedIn = false

// console.log(myappUser)

//object inside one object..
const newUser = {
    email:"xyz@gmail.com",
    address:{
        village:"Binnagur-Majhapara",
        Post:"Satkura",
        PS:"Haldibari",
        Dist:"Jalpaigui",
        Pin:735122
    }
}
// console.log(newUser)
// console.log(newUser.address.Post);


//Combine two objects...
const obj1 = {
    1:'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}

const obj3 = {
    5:'e',
    6:'f'
}

const obj4 = {
    7:'g',
    8:'h'
}

const obj5 = {
    9:'i',
    10:'j'
}



// const obj3 = {obj1, obj2}
// const objResult = Object.assign({}, obj1, obj2, obj3, obj4, obj5)

// {} Using this sytax mean's it's our target, and other objects are source
// so, other object are combine at target


//(...) = this is called sprade operator: it's used to combine two or more objects
const objResult = {...obj1, ...obj2}

console.log(objResult);
