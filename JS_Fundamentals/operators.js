"use strict"

// #1
console.log("Exercise 1")

let a = 1, b = 1;

let c = ++a; 
let d = b++;
console.log(`a = ${a}`); // 2
console.log(`b = ${b}`); // 2
console.log(`c = ${c}`); // 2
console.log(`d = ${d}`); // 1

// #2
// What are the values of a2 and x after the code below?
console.log("\nExercise 2")

let a2 = 2;

let x = 1 + (a2 *= 2);
console.log(`a2=${a2}`); // 4
console.log(`x=${x}`);   // 5

// #3
// What are results of these expressions? Conversions!
console.log("\nExercise 3")
console.log(`${"" + 1 + 0}`); // "10"
console.log(`${"" - 1 + 0}`); // -1
console.log(`${true + false}`); // 1
console.log(`${6 / "3"}`); // 2
console.log(`${"2" * "3"}`); // 6
console.log(`${4 + 5 + "px"}`); // "9px"
console.log(`${"$" + 4 + 5}`);  // "$45"
console.log(`${"4" - 2}`);  // 2
console.log(`${"4px" - 2}`); // NaN
console.log(`${"  -9  " + 5}`); // "  -9  5"
console.log(`${"  -9  " - 5}`); // -14
console.log(`${null + 1}`);  // 1
console.log(`${undefined + 1}`); // NaN
console.log(`${" \t \n" - 2}`);  //0-2 = -2

// #4
// Here’s code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let a4 = prompt("First number?", 1);
let b4 = prompt("Second number?", 2);

// console.log(a4 + b4);  // broken, the result is "12" since it's adding strings together.
console.log(Number(a4) + Number(b4)); 