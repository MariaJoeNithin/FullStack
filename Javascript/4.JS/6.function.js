// syntax

// function nameOfFunction () {
//     // function body   
// }

// // declaring a function named greet()
// function greet() {
//     console.log("Hello there");
// }

// Calling a Function

// // function call
// greet();

// Example:

// // program to print a text
// // declaring a function
// function disp() {
//     console.log("Welcome to Skill safari!");
// }

// // calling the function
// disp();

// Function Parameters

// // program to print the text
// // declaring a function
// function greet(name) {
//     console.log("Hello " + name + ":)");
// }

// // variable name can be different
// let name = prompt("Enter a name: ");

// // calling function
// greet(name);

// Example

// // program to add two numbers using a function
// // declaring a function
// function add(a, b) {
//     console.log(a + b);
// }

// // calling functions
// add(3,4);
// add(2,9);

// Function Return

// // program to add two numbers
// // declaring a function
// function add(a, b) {
//     return a + b;
// }

// // take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);

// Function Expressions

// // program to find the square of a number
// // function is declared inside the variable
// let x = function (num) { return num * num };
// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);


// Recursion

// // program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }

// JavaScript Variable Scope

// In JavaScript, a variable has two types of scope:

// 1. Global Scope
// 2. Local Scope

// Global Scope

// Example

// // program to print a text 
// let a = "hello";

// function disp () {
//     console.log(a);
// }

// disp(); // hello

// The value of a global variable can be changed inside a function.

// // program to show the change in global variable
// let a = "hello";

// function disp() {
//     a = 3;
// }

// // before the function call
// console.log(a);

// //after the function call
// disp();
// console.log(a); // 3

// In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.

// function hai() {
//     a = "Skillsafari"         // No declaration
// }

// hai();

// console.log(a); // Skillsafari

// Local Scope

// // program showing local scope of a variable
// let a = "Skill";

// function disp() {
//     let b = "Safari"
//     console.log(a + b);
// }

// disp();
// console.log(a + b); // error

// let is Block Scoped

// // program showing block-scoped concept
// // global variable
// let a = 'Welcome';

// function disp() {

//     // local variable
//     let b = 'Skill';

//     console.log(a + ' ' + b);

//     if (b == 'Skill') {

//         // block-scoped variable
//         let c = 'safari';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// disp();

// JavaScript Hoisting

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// // using test before declaring
// console.log(test);   // undefined
// var test;

// Variable Hoisting

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// Example

// // program to display value
// a = 5;
// console.log(a);
// var a; // 5

// But initializations are not hoisted.

// // program to display value
// console.log(a); // undefined
// var a = 5;

// Function Hoisting

// A function can be called before declaring it.

// Example

// // program to print the text
// disp();

// function disp() {
//     console.log('Hi, Welcome to Skillsafari!');
// }

// But function expression are not hoisted.

// // program to print the text
// disp();

// let disp = function() {
//     console.log('Hi, Welcome!'); // Error
// }


// Callback functions

// a callback is a function that you pass into another function as an argument for executing later.

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

//   We can use Function Expressions to write an equivalent, shorter function:
  
  
//   function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },//They have no name, and so are called anonymous.
//     function() { alert("You canceled the execution."); } //They have no name, and so are called anonymous.
//   );

//   Function Expression vs Function Declaration

//   Function Declaration: a function, declared as a separate statement, in the main code flow:

//         // Function Declaration
//         function sum(a, b) {
//             return a + b;
//         }

//  Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

//         // Function Expression
//         let sum = function(a, b) {
//             return a + b;
//         };

//         There are two types of callbacks: 
            
//             synchronous callbacks and           

//             A synchronous callback is executed during the execution of the high-order function that uses the callback. 

//             Asynchronous callbacks.
           
//             An asynchronous callback is executed after the execution of the high-order function that uses the callback.


// Arrow functions

// Syntax

// let func = (arg1, arg2, ..., argN) => expression;

// Examples

// let sum = (a, b) => a + b;

// console.log( sum(1, 2) ); // 3

// let double = n => n * 2;

// console.log( double(3) ); // 6

// let hello = () => console.log("Hello!");

// hello();


// let age = prompt("What is your age?", 18);

// let vote = (age >= 18) ?
//   () => alert('Eligible for vote!') :
//   () => alert("Not Eligible!");

// vote();

// Multiline arrow functions

// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   };
  
//   alert( sum(1, 2) ); // 3


//   Immediately Invoked Function Expression

//   A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. 

//   syntax for defining an IIFE:

//             (function(){
//                 //...
//             })();

//   for arrow function

//             (() => {
//                 //...
//             })();
// Example

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);