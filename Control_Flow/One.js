//if

const isLoggedIn = true

if (isLoggedIn) {
    console.log("Ho geya, chal nikal!");
}

//Operators
//<, >, >=, <=, !=, ==, ===, !==
// === used for data type checking and also for value checking

//if-else..

// if(2 === '2'){
//     console.log("ho geya!");
// }

const temparature = 35
if(temparature <= 45){
    console.log("Bahar mat jao bht dhoop hai..");
}
else{
    console.log("weather mast ho rha nh, chlo gum k ate hy");
}

//implesite scope..

// const paisa = 1100
// if(paisa > 500) console.log("Ameer hy tu toh!"), console.log("thoda udhari dy mujhe");


//nested condition..

// const paisa = 1000
// if(paisa < 500){
//     console.log("Aur paisa chahiye tere account mai");
// }
// else if(paisa < 750){
//     console.log("Paisa do re aur");
// }
// else if(paisa < 900){
//     console.log("chal jayega");
// }
// else{
//     console.log("bht paisa hy tere pass");
// }

// && and ||

const isSignedIn = true
const debitcare = true
const isLoggedInFromGoogle = false
const isLoggedInFromPhone_no = true

if(isSignedIn && debitcare){
    console.log(`Haan! karid sakte ho abhi`);
}

if(isLoggedInFromGoogle || isLoggedInFromPhone_no){
    console.log(`thik hy chalega`);
}