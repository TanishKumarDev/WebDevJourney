// 02_variables.js

// Variable Declaration
var name = "Tanish (var)";
let age = 21;        // let: modern way
const country = "India"; // const: fixed value

console.log(name, age, country);

// Re-declaration & Re-assignment
var a = 5;
var a = 10;  // ✅ var allows re-declaration

let b = 20;
// let b = 25; // ❌ let doesn't allow re-declaration

b = 30;  // ✅ reassignment allowed

const c = 40;
// c = 50; // ❌ const can't be reassigned

// Scope
{
  var globalVar = "I'm global with var";
  let blockLet = "I'm block-scoped";
  const blockConst = "I'm also block-scoped";
}

console.log(globalVar); // ✅ works
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error

// Hoisting
console.log(d); // undefined
var d = 100;

// console.log(e); // ❌ ReferenceError
let e = 200;
