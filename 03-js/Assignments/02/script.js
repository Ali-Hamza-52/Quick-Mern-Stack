// let number = parseInt(prompt("Enter a number"));

// if (number >= 1 && number <= 10) {
//   if (number === 1) {
//     console.log(`The ${number} in roman version is = I `);
//   } else if (number === 2) {
//     console.log(`The ${number} in roman version is = II `);
//   } else if (number === 3) {
//     console.log(`The ${number} in roman version is = III `);
//   } else if (number === 4) {
//     console.log(`The ${number} in roman version is = IV `);
//   } else if (number === 5) {
//     console.log(`The ${number} in roman version is = V `);
//   } else if (number === 6) {
//     console.log(`The ${number} in roman version is = VI `);
//   } else if (number === 7) {
//     console.log(`The ${number} in roman version is = VII `);
//   } else if (number === 8) {
//     console.log(`The ${number} in roman version is = VIII `);
//   } else if (number === 9) {
//     console.log(`The ${number} in roman version is = IX `);
//   } else {
//     console.log(`The ${number} in roman version is = X `);
//   }
// } else {
//   console.log("Please Enter Valid Number between 1 - 10");
// }

// let day = parseInt(prompt("Enter Days"));
// let month = parseInt(prompt("Enter month"));
// let year = parseInt(prompt("Enter year"));

// let isMagical = day * month === year;

// if (isMagical) {
//   console.log("Date is magical");
// } else {
//   console.log("Date is not magical");
// }

// let lastMonthChecks = Number(prompt("Enter last month checks"));

// let fee = 10.0;
// if (lastMonthChecks >= 0) {
//   if (lastMonthChecks < 20) {
//     fee = fee + lastMonthChecks * 0.1;
//   } else if (lastMonthChecks >= 20 && lastMonthChecks <= 39) {
//     fee = fee + lastMonthChecks * 0.08;
//   } else if (lastMonthChecks >= 40 && lastMonthChecks <= 59) {
//     fee = fee + lastMonthChecks * 0.06;
//   } else {
//     fee = fee + lastMonthChecks * 0.04;
//   }
//   console.log("Total Fee is $", fee);
// } else {
//   console.log("Don't allow negitive number");
// }

// let num1 = Math.floor(Math.random() * 40) + 10;
// let num2 = Math.floor(Math.random() * 40) + 10;

// document.write(`<h1 style="color:blue;">The first numbers is ${num1}</h1>`);
// document.write(`<br />`);
// document.write(`<h1 style="color:blue;">The Second number is ${num2}</h1>`);
// document.write(
//   `<h1 style="color:blue;">Calculate the sum of following and answer </h1>`
// );

// console.log("num1 is ",num1)
// console.log("num2 is ",num2)
// let sum = Number(prompt("Enter the sum of random generated number"));

// if ((num1 + num2) == sum) {
//   alert("Congralations your answer is right");
// } else {
//   alert("Oops your answer is wrong");
// }

// The area of a rectangle is the rectangle’s length times its width. Write a program that asks
// for the length and width of two rectangles. The program should tell the user which rectan
// gle has the greater area, or if the areas are the same.

// let length1 = parseInt(prompt("Enter the length of first rectangle "));
// let width1 = parseInt(prompt("Enter the width of first rectangle "));

// let length2 = parseInt(prompt("Enter the length of second rectangle "));
// let width2 = parseInt(prompt("Enter the width of second rectangle "));

// let area1 = length1 * width1;
// let area2 = length2 * width2;

// if (area1 > area2) {
//   console.log(`First Rectangle is larger its length is ${length1} * ${width1} = ${area1}`);
//   console.log(`Second Rectangle is samller its length is ${length2} * ${width2} = ${area2}`);
// } else if (area2 > area1) {
//     console.log(`Second Rectangle is larger its length is ${length2} * ${width2} = ${area2}`);
//     console.log(`First Rectangle is samller its length is ${length1} * ${width1} = ${area1}`);
// } else {
//   console.log("Both are equal");
// }

// ​‌‌‍⁡⁢⁣⁢Time Calculator⁡​
//  Write a program that asks the user to enter a number of seconds.
// • There are 86400 seconds in a day. If the number of seconds entered by the user is
//  greater than or equal to 86400, the program should display the number of days in
//  that many seconds.
//  • There are 3600 seconds in an hour. If the number of seconds entered by the user is
//  less than 86400, but is greater than or equal to 3600, the program should display the
//  number of hours in that many seconds.
//  • There are 60 seconds in a minute. If the number of seconds entered by the user is less
//  than 3600, but is greater than or equal to 60, the program should display the number
//  of minutes in that many seconds.

// let seconds = parseInt(prompt("Enter a number of seconds."))

// let days=0;
// let hour=0;
// let minutes=0;

// just for logics
// days = parseInt(seconds /86400) //typecasting float to int
// seconds = seconds % 86400
// console.log("days",days)
// console.log("seconfs",seconds)

// if(seconds >= 86400){
//     days = Math.floor(seconds/86400);
//     seconds = seconds % 86400;
//     hour = Math.floor(seconds/3600);
//     seconds = seconds % 3600;
//     minutes = Math.floor(seconds/60);
//     seconds = seconds % 60;

//     console.log("Days : Hours : Minutes : Seconds" )
//     console.log(`${days}    : ${hour}     : ${minutes}      : ${seconds}`)
// }else if(seconds >= 3600  && seconds < 86400){
//     hour = Math.floor(seconds/3600);
//     seconds = seconds % 3600;
//     minutes = Math.floor(seconds/60);
//     seconds = seconds % 60;

//     console.log("Days : Hours : Minutes : Seconds" )
//     console.log(`${days}    : ${hour}     : ${minutes}      : ${seconds}`)

// }else if(seconds >= 60  && seconds < 3600){
//     minutes = Math.floor(seconds/60);
//     seconds = seconds % 60;

//     console.log("Days : Hours : Minutes : Seconds" )
//     console.log(`${days}    : ${hour}     : ${minutes}      : ${seconds}`)

// }else{
//     console.log("Days : Hours : Minutes : Seconds" )
//     console.log(`${days}    : ${hour}     : ${minutes}      : ${seconds}`)
//     console.log("Days : Hours : Minutes : Seconds" )
//     console.log(`${days}    : ${hour}     : ${minutes}      : ${seconds}`)
// }

// Running the Race
// Write a program that asks for the names of three runners and the time it took each of them
//  to finish a race. The program should display who came in first, second, and third place.
//  Think about how many test cases are needed to verify that your problem works correctly.
//  (That is, how many different finish orders are possible?)
//  Input Validation: Only accept positive numbers for the times.

// let player1 = prompt("Enter Frist Player Name");
// let time1 = Number(prompt("Enter the time First player took"));

// let player2 = prompt("Enter Two Player Name");
// let time2 = Number(prompt("Enter the time Second player took"));

// let player3 = prompt("Enter Third Player Name");
// let time3 = Number(prompt("Enter the time Third player took"));

// if (time1 < time2 && time1 < time3) {
//   console.log(`This is First ${player1}`);
//   if (time2 < time3) {
//     console.log(`This is Second ${player2}`);
//     console.log(`This is Third ${player3}`);
//   } else {
//     console.log(`This is Second ${player3}`);
//     console.log(`This is Third ${player2}`);
//   }
// } else if (time2 < time3 && time2 < time1) {
//   console.log(`This is First ${player2}`);
//   if (time3 < time1) {
//     console.log(`This is Second ${player3}`);
//     console.log(`This is Third ${player1}`);
//   } else {
//     console.log(`This is Second ${player1}`);
//     console.log(`This is Third ${player3}`);
//   }
// } else {
//   console.log(`This is First ${player3}`);
//   if (time2 < time1) {
//     console.log(`This is Second ${player2}`);
//     console.log(`This is Third ${player1}`);
//   } else {
//     console.log(`This is Second ${player1}`);
//     console.log(`This is Third ${player2}`);
//   }
// }

let char = prompt("Enter a single character:").toLowerCase();

if (char.length === 1 && /[a-z]/.test(char)) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log("The character is a vowel.");
  } else {
    console.log("The character is a consonant.");
  }
} else {
  console.log("Invalid input. Please enter a single alphabetic character.");
}
