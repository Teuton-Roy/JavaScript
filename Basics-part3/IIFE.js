//Immediately Invoked Function Expressions (IIFE)

//IIFE function..

(function sutta(){
    //named IIFE
    console.log('Sutta-wala, DB-Connected😁');
})();


/*
    Syntax of IIFE: 
    
    1st paranthesis where we define our function ()
    2nd paranthesis where the function excution heppens ()
    ()()

    Why we use IIFE ?
        whatever we declare in Global Scope(variables) remove their polution
        for that's why we use IIFE.

*/

( () => {
    //Unamed IIFE//
    console.log(`IIFE  connected!!`);
})();

( (name) => {
    //IIFE with Passing Parameters..
    console.log(`${name}, Your IIFE  connected`);
})(`Teuton`);