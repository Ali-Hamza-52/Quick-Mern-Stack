/*
    ⁡⁢⁣⁢if else​⁡

    When you have confirm this any situation have two posible asnwer then you use if else

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
    
    ⁡⁢⁣⁢Conditional Statements
    (condition) ? ⁡⁣⁢⁢if true run this⁡ : ⁡⁢⁣⁣if false then run this⁡ ⁡
    
*/

// let number = parseInt(prompt("Enter any number: "));

// let result = number % 2 === 0 ? "Even" : "odd";
// console.log("The number is ", result);

let choice = parseInt(
  prompt(`
    Press 1: For Air
    Press 2: For Water
    Press 3: For Steel
    Enter the menu chocie number
    `)
);
let airSound = 1100;
let waterSound = 4900;
let steelSound = 16400;

if (choice >= 1 && choice <= 3) {
  let distance = parseInt(prompt("Enter the distance in feets: "));
  if (distance > 0) {
    if (choice === 1) {

      alert(`The total sound in this is ${airSound * distance}`);
    
    } else if (choice === 2) {

      alert(`The total sound in this is ${waterSound * distance}`);
    
    } else {

      alert(`The total sound in this is ${steelSound * distance}`);
    
    }
  } else {

    alert("Distance must be greate then 0");
  
}
} else {

  alert("Please Enter Correct menu medium");

}