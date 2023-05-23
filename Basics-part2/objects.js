// Singleton: only one instance of an object is allowed.

// Object literals 

const symbol = Symbol("key1")

const myUser = {
    "name": "Teuton",
    "full name":"Teuton Roy",
    DOB: "18-03-2000",
    [symbol]: "Magiiii",
    "email":"2021pgcaca070@nitjsr.ac.in",
    phone: 8972028100,
    isLoggedIn: false,
    courses: ["DSA", "Web Dev", "React"],
    login: function(){
        this.isLoggedIn = true;
    },
    logout: function(){
        this.isLoggedIn = false;
    },

    lastLogin: [
        [
            "18-03-2021",
            "21:40:58"
        ],
        [
            "19-03-2021",
            "8:25:10"
        ]
    ]
}

console.log(myUser);

console.log(myUser.name);
console.log(myUser["full name"]);
console.log(myUser.email);

//change value
myUser.email = "tonroy.jptt@gmail.com"
console.log(myUser.email);

//Lock the object so no one can change it..
Object.freeze(myUser)



//Declaring a symbol
const mysym = Symbol("key1")


// Declare a symbol and add as a object key and print it
const myobj = {
    //using as a String
    mysym: "value1",
}

console.log(myobj.mysym);
console.log(typeof myobj.mysym);


const mysym1 = Symbol("key1")

const myobj1 = {
    //using as a Symbol
    
    [mysym1] : "value22"
}

console.log(myobj1[mysym1]);