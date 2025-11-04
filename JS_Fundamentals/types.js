"use strict"

let name = "Ilya";

console.log( `hello ${1}` ); // expect "hello 1"

console.log( `hello ${"name"}` ); // expect "hello name"

console.log( `hello ${name}` ); // expect "hello Ilya"