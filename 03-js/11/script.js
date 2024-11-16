// if decision making on any condition
/* 
    condition always have two results true,false
    if condition are true then code will be execute otherwise skip.

    if(condition){
        if condition are true this code run
    }

    if(condition){
        if condition are false this code don't run
    }    
*/

// let age = prompt("Enter your age");
// age = Number(age);

// if (age >= 18) {
//   console.log("You are eligble for vote");
// }

// if (age < 18) {
//   console.log("You are not eligble for vote");
// }

// let number = prompt("Enter your number");
// number = Number(number);

// if(number%2 === 0){
//     console.log("The number is even")
// }

// if(number%2 === 1){
//     console.log("The number is odd")
// }

// let year = prompt("Enter a year");
// year = Number(year);

// if(year % 4 === 0){
//     console.log("This year is leap year and in febuaray have 29 days")
// }
// if(year % 4 !== 0){
//     console.log("This year is not leap year and in febuaray have 28 days")
// }

/*
    ⁡⁣⁣⁢𝗟𝗼𝗴𝗶𝗰𝗮𝗹 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿𝘀: 𝗔𝗡𝗗 (&&), 𝗢𝗥 (||), 𝗡𝗢𝗧 (!)⁡

    AND operator (&&) returns true if both operands are true and false otherwise
    true && true === true
    true && false === false
    faslse && true === false
    false && false === false


    OR operator (||) returns true if at least one operand is true
    true || true === true
    true || false === true
    false || true === true
    false || false === false

    NOT operator (!) returns true if operand is false
    !true === false
    !false === true

    !(true || false) === false
    !(true && false) === true
    !(true && true) === false
    !(false && false) === true

    ​‌‌‌‍‍‍⁡⁣⁢⁣𝙞𝙛 𝙚𝙡𝙨𝙚⁡​

    if the condition is true then the code will be executed
    if(condition){
        if condition are true this code run
    }else{
        if condition are false this code run
    }
    
    ⁡⁡⁣⁢⁢We cannot do this
    if(condition){
        if condition are true this code run
    }else (condition){ // this is wrong
    }
        ⁡ ⁡

    
*/

// let age = prompt("Enter your age");
// age = Number(age);

// if (age >= 18) {
//   console.log("You are eligble for vote");
// } else {
//   console.log("You are not eligble for vote");
// }

// let number = prompt("Enter your number");
// number = Number(number);

// if (number % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

// let year = prompt("Enter a year");
// year = Number(year);

// if (year % 4 === 0) {
//   console.log("This year is leap year and in febuaray have 29 days");
// } else {
//   console.log("This year is not leap year and in febuaray have 28 days");
// }

/*
    ​‌‌‍⁡⁢⁣⁣if else if⁡​
    if the condition is matched then this code are executed remaining code are skipped

    if(condition1){
        if condition are true this code run
    }else if(condition2){
        if condition are true this code run
    }else if(condition3){
        if condition are true this code run
    }esle{
    
    }
*/

// let marks = prompt("Enter Your Marks");
// marks = Number(marks);

// if (marks >= 90) {
//   console.log("Your grade is A+");
// } else if (marks >= 85 && marks < 90) {
//   console.log("Your grade is B");
// } else if (marks >= 80) {
//   console.log("Your grade is B");
// } else if (marks >= 70) {
//   console.log("Your grade is C");
// } else if (marks >= 60) {
//   console.log("Your grade is D");
// } else if (marks >= 50) {
//   console.log("Your grade is E");
// } else {
//   console.log("Your grade is F");
// }
let number = prompt("Enter the number");
number = Number(number);

// if (number >= 1) {
//   if (number <= 10) {
//     console.log("Your number is good");
//   } else {
//     console.log("Your number is not good becuse you enter large number 10");
//   }
// } else {
//   console.log("You enter small number from 1");
// }

if(number >=1 && number <=10){
    console.log("Your number is good");
}else{
    console.log("Entered Number is Wrong. Should between 1 to 10");
}