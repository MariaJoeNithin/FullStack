

Conditional branching

n JavaScript, there are three forms of the if...else statement.

        if statement
        if...else statement
        if...else if...else statement

if statement

syntax
if (condition) {
    // the body of if
}

Examples

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) 
{
 // the body of the if statement
  console.log("The number is positive");
}

if...else statement
syntax
if (condition) {
    // block of code if condition is true
} else {
   // block of code if condition is false
}

Examples

// check if the number is positive or negative/zero

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

if...else if statement

syntax

if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}

Examples

// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

Ternary Operator

syntax 

condition ? expression1 : expression2

Examples

// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);

// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);

switch Statement

syntax

switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}

Examples

// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);

Example 

// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

