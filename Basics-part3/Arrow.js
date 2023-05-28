const User = {
    username : "Teuton Roy",
    price: '299',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
    /*
        Within this scope, for access every veriable we use [this.] keyword  
        [this.] keyword use for current context
    */
}