const User = {
    username : "Teuton Roy",
    price: '299',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
    }
    /*
        Within this scope, for access every veriable we use [this.] keyword  
        [this.] keyword use for current values
    */
}
User.welcomeMessage() //this welcome message for Teuton

User.username = 'laura' //here, I change the username context/value
User.welcomeMessage() //now,this welcome message for laura
