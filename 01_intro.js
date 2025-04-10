// 01_intro.js

// JavaScript Basics: Output
console.log("👋 Hello, JavaScript World!");

// Variables can be declared with var, let, const
var name = "Tanish";
let age = 21;
const country = "India";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// JavaScript is dynamically typed
let x = 10; // number
x = "Now I am a string"; // no error!
console.log(x);

// Everything is an object (almost)
let arr = [1, 2, 3];
console.log(typeof arr); // object

let func = function() {};
console.log(typeof func); // function (but still object internally)

// No need to compile JS
// Just run it in browser console or Node.js

// Let's test in browser too
// alert("JavaScript is working in the browser!");
