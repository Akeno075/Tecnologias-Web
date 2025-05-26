"use strict";
const person1 = {
    name: "John Doe",
    age: 30,
    greet: (greeting) => `${greeting}, my name is John Doe`
};
const person2 = {
    name: "Jane Smith",
    age: 25,
    occupation: "Engineer",
    greet: (greeting) => `${greeting}, my name is Jane Smith`
};
console.log(person1.greet("Hello")); // Output: Hello, my name is John Doe
console.log(person2.greet("Hi")); // Output: Hi, my name is Jane Smith
