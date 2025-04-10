// let x = [1,2]
// let y =x;

// x.push(3);
// console.log(y); // [1,2,3]
// console.log(x); // [1,2,3]
// console.log(x === y); // true   

// 🧠 4. Type Coercion & Conversion
// Type coercion is the automatic or implicit conversion of values from one data type to another.
// Type conversion is the explicit conversion of values from one data type to another.
// In JavaScript, type coercion can happen in several ways, including:
// 1. Implicit coercion: JavaScript automatically converts values to the appropriate type when performing operations.
// 2. Explicit coercion: You can use functions like Number(), String(), or Boolean() to convert values explicitly.
// 3. String concatenation: When you use the + operator with a string and another value, JavaScript converts the other value to a string.
// 4. Comparison operators: When using comparison operators (==, !=), JavaScript may convert values to the same type before comparing them.
// 5. Template literals: When using template literals (``), JavaScript converts values to strings automatically.

console.log('5' + 1); // '51' (string concatenation)
console.log('5' - 1); // 4 (implicit coercion)

console.log(true + 2); // 3 (implicit coercion)

console.log(null == 0); // true (type coercion)

console.log(null >= 0); // true (type coercion)