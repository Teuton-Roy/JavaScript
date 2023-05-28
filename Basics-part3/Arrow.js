const User = {
    username : "Teuton Roy",
    price: '299',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this) //show current context..
    }
    /*
        Within this scope, for access every veriable we use [this.] keyword  
        [this.] keyword use for current values
    */
}
User.welcomeMessage() //this welcome message for Teuton

User.username = 'laura' //here, I change the username context/value
User.welcomeMessage() //now,this welcome message for laura

console.log(this); 
/*
    here the out is empty object cause, in global there is no object..
    
    it return the empty object cause it execute in node platform,
    if we execute in our browser console then it gives some output...
*/