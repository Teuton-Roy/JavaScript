//About Singleton Pattern..
//Declare object using Constructor..


// const myapp = {} // non-singleton pattern..


const myappUser = new Object() //Singleton Pattern..
myappUser.id = "@xyz1"
myappUser.name = "Teuton Roy"
myappUser.isLoggedIn = false

console.log(myappUser)