// Operators
// Terms:
//  “operand” - An operand – is what operators are applied to.
//  "Operator" - which operates one or more opearands

//     Eg: A+B Here A, B are Operands and the symbol + is Operator

//     “unary” - An operator is unary if it has a single operand.
//         Eg: ++a
//     “binary” - An operator is binary if it has two operands. 
//         Eg: a+B


// Types of JavaScript Operators
        
// There are different types of JavaScript operators:
        
//         Arithmetic Operators
//         Assignment Operators
//         Comparison Operators
//         String Operators
//         Logical Operators
//         Bitwise Operators
//         Ternary Operators
//         Type Operators  

// The following Arithmetic operations are supported:

//         Addition +,
//         Subtraction -,
//         Multiplication *,
//         Division /,
//         Remainder %,
//         Exponentiation **.
// Examples:

// Addition +,

// let sum = 10 + 20;
// console.log(sum); // 30

// let Itemcost    = 220.50, 

//    deliveryFee = 32.5;
// let totalPrice  = Itemcost + deliveryFee;
// console.log(totalPrice);

// For String

let x = '10',// Or let result = 10 + '20';
    y = '20';
let result = x + y;
console.log(result);//1020

console.log(2 + 2 + '1' ); //41
console.log('1' + 2 + 2); //122

let a = "2";
let b = "3";

console.log(a + b);//23

console.log( +a + +b ); // 5

// Subtraction -,

// let result = 30 - 10;
// console.log(result); // 20

// let Itemcost    = 220.50,
//     discount    = 25.0
// let totalPrice  = Itemcost - discount;
// console.log(totalPrice);

// Multiplication *,
// let result = 2 * 3;
// console.log(result);

// let Itemcost    = 50,
//     quantity    = 3
// let totalPrice  = Itemcost * 3;
// console.log(totalPrice);

// Division /
// let result = 20 / 10;
// console.log(result); // 2

// arithmetic operators with objects

valueOf()

let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);

  toString()

  let energy = {
    toString() {
      return 50;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);

  Remainder %

  console.log( 5 % 2 ); //1
  console.log( 8 % 3 ); //2 
  console.log( 8 % 4 ); //0
  
  1) Using the remainder operator with positive dividend example

        let remainder = 7 % -2;
        console.log(remainder); // 1
        
        remainder = 7 % 2;
        console.log(remainder); // 1
  
  2) Using the remainder operator with negative dividend example

          let remainder = -7 % 3;
          console.log(remainder); // -1
          
          remainder = -7 % -3;
          console.log(remainder); // -1
                      
  3) Using the remainder operator special values    
  
        let remainder = Infinity % 2;
        console.log(remainder); // NaN

        let remainder = 10 % Infinity;
        console.log(remainder); // 10 

        let remainder = Infinity % Infinity;
        console.log(remainder); // NaN

        let remainder = 0 % 10;
        console.log(remainder); // 0

        let remainder = 10 % 0;
        console.log(remainder); // NAN

        let remainder = '10' % 3;
        console.log(remainder); // 1
        
  Remainder vs Modulo operator

  //const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

  // dividen and divisor have the same sign
  console.log('remainder:', 5 % 3); // 2
  console.log('modulo:', mod(5, 3)); // 2

  // dividen and divisor have the different signs
  console.log('remainder:', -5 % 3); // -2
  console.log('modulo:', mod(-5, 3)); // 1
  
//   Exponentiation **

//   The exponentiation operator ** raises a number to the power of an exponent.
// The exponentiation operator ** accepts values of the type number or bigint.

//   console.log( 5 ** 2 ); 
//   console.log( 8 ** 3 ); 
//   console.log( 8 ** 4 );
//   console.log( 8 ** (1/2) );
//   console.log( 8 ** (1/3) );

//   let result = 2n ** 3n;
//   console.log(result); // 8n

//   let result = -2**3; 
//   console.log(result);// Syntax error

//   let result = (-2)**3;
//   console.log(result); // -8

//   Using Math Functions
//   Syntax
//   Math.pow(base, exponent)
//   let result = Math.pow(2,2);
//   console.log(result); // 4

//   result = Math.pow(2,3);
//   console.log(result); // 8

Unary Operators

Unary operators work on one value.
Unary plus (+) or minus (-) converts a non-numeric value into a number. The unary minus negates the value after the conversion.
The prefix increment operator adds one to a value. The value is changed before the statement is evaluated.
The postfix increment operator adds one to a value. The value is changed after the statement is evaluated.
The prefix decrement operator subtracts one from a value. The value is changed before the statement is evaluated.
The postfix decrement operator subtracts one from a value. The value is changed after the statement is evaluated.

Examples

Unary plus (+)

    let x = 10;
    let y = +x;

    console.log(y); // 10

    let s = '10';
    console.log(+s); // 10

    let f = false,
        t = true;

    console.log(+f); // 0
    console.log(+t); // 1

    let person = {
      name: 'John',
      toString: function () {
        return '25';
      },
    };

    console.log(+person);
      
  Unary minus (-)
    
      let x = 10;
      let y = -x;
      
      console.log(y); // -10

Increment / Decrement operators

Increment operators

  let age = 25;
  ++age;

  console.log(age); // 26

  let age = 25;
  age++;

  console.log(age); // 25
  ++age;
  console.log(age);//27

  let weight = 90;
  weight = ++weight + 5;

  console.log(weight); // 96

  Decrement operators

  let weight = 90;
  --weight
  
  console.log(weight); // 89

  let weight = 90;
  weight--

  console.log(weight); // 90


  let weight = 90;
  weight = --weight + 5;

  console.log(weight); // 94


  let weight = 90;
  let newWeight = weight++ + 5;

  console.log(newWeight); // 95
  console.log(weight); // 91

  assignment operators

  An assignment operator (=) assigns a value to a variable.
  
  Syntax 

  variable = value

  Examples

  let a = 1;
  let b = 2;
  a=b;
  console.log(a)
  let c = 3 - (a = b + 1);
  console.log(c)

  let a = 10, b = 20, c = 30;
  a = b = c; // all variables are 30

shorthand assignment

let a = 20;
let b = 10;
a += b;// a=a+b
console.log(a)
a -= b;
console.log(a)
a *= b;
console.log(a)
a /= b;
console.log(a)
a %= b;
console.log(a)

Comparison Operators

Used To compare two values,A comparison operator returns a Boolean value indicating that the comparison is true or not. 
   
Operator	Meaning
    <	        less than
    >	        greater than
    <=	      less than or equal to
    >=	      greater than or equal to
    ==	      equal to
    !=	      not equal to

Compare numbers

Examples

let a = 10, 
    b = 20; 

console.log(a < b); 
console.log(a > b);  
console.log(a <= b); 
console.log(a >= b); 
console.log(a == 10);
console.log(a != 10); 

Compare a number with a value of another type

Examples
console.log(10 < '20'); // true
console.log(10 == '10'); // true

Compare a Boolean with another value

console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

Strict equal (===) and not strict equal (!==)

console.log("10" == 10); // true
console.log("10" === 10); // false

Miscellaneous

console.log(null == undefined); // true

console.log(NaN == 1); // false
console.log(NaN == NaN); // false

Logical Operators
JavaScript provides three logical operators:

      ! (Logical NOT)
      || (Logical OR)
      && (Logical AND)

Examples

let eligible = false,
    required = true;

console.log(!eligible);
console.log(!required);

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

Double-negation (!!)

The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.

let counter = 10;
console.log(!!counter); // true

let eligible = false,
    required = true;

console.log(eligible && required); // false

let a=0, b=1, c=0;

let result = a && b && c;


let result = a || b;
let result = a || b || c;

Nullish coalescing operator '??'

Syntax:
result = variable ?? variable

Examples:
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

