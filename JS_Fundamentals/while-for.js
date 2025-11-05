// #1 What is the last value alerted by this code? Why?

let i1 = 3;
while (i1) {
  console.log( i1-- );
}//3, 2, 1

// #2 For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?
// The prefix form ++i:
let i = 0;
while (++i < 5) console.log( i ); // 1,2,3,4
// The postfix form i++
let j = 0;
while (j++ < 5) console.log( j ); // 1, 2, 3, 4, 5

// #3 For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?
// The postfix form:
for (let i = 0; i < 5; i++) console.log( i ); // 1,2,3,4
// The prefix form:
for (let i = 0; i < 5; ++i) console.log( i ); // 1,2,3,4
// The for loop steps go in order, begging -> cond -> body -> increment.

// #4 Output even numbers from 2 to 10 inclusive
for (let i = 2; i<=10; i++){
    if (i%2 == 0){
        console.log(i);
    }
}

// #5 Rewrite the code changing the for loop to while without altering its
// behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i5 = 0
while (i5 < 3){
    console.log(`number ${i5}!`);
    i5++;
}

// #6 Write a loop which prompts for a number greater than 100. 
// If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters
// a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. 
// There’s no need to implement a special handling for a non-numeric input in this task.
let number = prompt("Give me a number",'');
while (number <= 100){
    number = prompt("Give me another number",'');
    if (number === null || number === ''){
        break;
    }
}