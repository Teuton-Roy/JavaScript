// Singleton: only one instance of an object is allowed.

// Object literals 


const myUser = {
    "name": "Teuton",
    "full name":"Teuton Roy",
    DOB: "18-03-2000",
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


//Declaring a symbol
const mysym = Symbol("key1")

