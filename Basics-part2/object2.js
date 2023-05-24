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
console.log(newUser)