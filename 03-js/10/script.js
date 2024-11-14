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

// if(number%2 == 0){
//     console.log("The number is even")
// }

// if(number%2 == 1){
//     console.log("The number is odd")
// }

let year = prompt("Enter a year");
year = Number(year);

if(year % 4 === 0){
    console.log("This year is leap year and in febuaray have 29 days")
}
if(year % 4 !== 0){
    console.log("This year is not leap year and in febuaray have 28 days")
}
