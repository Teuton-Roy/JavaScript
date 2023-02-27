
 let age = "23"
 console.log(typeof(age));

 let valueInNumber = Number(age)
 console.log(typeof(valueInNumber));
 console.log(valueInNumber);

 console.log("2" > 1);
 console.log("02" > 1);

 console.log(null > 0);
 console.log(null == 0);
 console.log(null >= 0);
 console.log(null <= 0); 
 console.log(null < 0); 

 /*
    The reason is that an equality check == and comparisions > < >= <=   
    work differently.  
    Comparisions convert null to a number, treating it as 0.  
    That's why (3) null >= 0 is true and (1) null > 0 is false..
*/

// === 
console.log("2" === 2);