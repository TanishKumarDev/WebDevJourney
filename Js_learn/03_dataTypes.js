// 03_dataTypes.js

// Primitive Types
let str = "Tanish";         // String
let num = 21;               // Number
let bool = true;            // Boolean
let nothing = null;         // null
let notAssigned;            // undefined
let bigNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

console.log(typeof str);         // string
console.log(typeof num);         // number
console.log(typeof bool);        // boolean
console.log(typeof nothing);     // object ❗ (weird quirk)
console.log(typeof notAssigned); // undefined
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol

// Reference Types
let person = {
  name: "Tanish",
  age: 21
};

let numbers = [10, 20, 30];

function sayHello() {
  console.log("Hello from function!");
}

console.log(typeof person);   // object
console.log(typeof numbers);  // object
console.log(typeof sayHello); // function

// Reference Copying
let a = { value: 10 };
let b = a; // same reference

b.value = 20;

console.log(a.value); // 20 — because a & b refer to same object
