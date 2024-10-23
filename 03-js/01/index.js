// How to create Variable
/*
    let : for variable 
    var : for variable
    const : delcare constants
*/

let studentName ="Ali Hamza";
let fatherName = "M. Haneef";

console.log("My name is : " + studentName + "My Father Name is : " + fatherName);

/*
*** Format Specifier ***
\n : for new line
\t : for tab
*/ 
console.log("My name is : " + studentName + "\nMy Father Name is : " + fatherName);
console.log("My name is : " + studentName + "\tMy Father Name is : " + fatherName);

/* 
    Use of Wrong variable name
*/

// let 1name = "ali";
// let @name ="wrong";

/* 
    Use of Good variable name
*/

// let _name = "ali";
// let num1 = 5;
// let firstName = "ali";
// let first_name = "hamza";

let age;
console.log("my age is " + age);
age=22;
console.log("my age is " + age);

// Constants
const LAST_PROFIT_NAME = "Muhammad (sws)";
// LAST_PROFIT_NAME = "Ahmed";   if we use give an error
console.log("Last : " + LAST_PROFIT_NAME);