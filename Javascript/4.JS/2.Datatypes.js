// Data are stored in local storge

        //Data Types

             // There are 8 basic data types in JavaScript.

                 // Seven primitive data types:

                    // number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).

                    let n = 100;
                    console.log(n)
                    n = 36.9;
                    console.log(n)

                // bigint for integer numbers of arbitrary length.A BigInt value is created by appending n to the end of an integer:

                    const xy = 1234567890123456789012345678901234567890n;
                    console.log(typeof(xy))


                /* String for strings. A string may have zero or more characters, there’s no separate single-character type.
                    In JavaScript, there are 3 types of quotes.

                    Double quotes: "Hello".
                    Single quotes: 'Hello'.
                    Backticks: `Hello`.*/

                    let s1 = "Skill Safari";
                    let s2 = 'The Learning Hub';
                    let s3 = `Welcome to ${s1}`;
                    let pwd=123
                    console.log("\n",s1,"\n",s2,"\n",s3)
                    console.log(`\nHello Every one ${s3}`)
                    console.log(`Your User id is ${"OFSD23C"}`)
                    console.log(`Your password is ${100}`)
                    // console.log("Your User id:","OFSD23C")
                    // console.log("Your Pasword is"+pwd)

                // boolean for true/false.
                    let useridFieldChecked = true; // yes, user id field is checked
                    let passwordFieldChecked = false; // no, password field is not checked
                
                // null for unknown values – a standalone type that has a single value null.
                // The null value does not belong to any of the types described above.
                    let age = null;
                // undefined for unassigned values – a standalone type that has a single value undefined.
                    let temp;
                    console.log(temp)
                // symbol for unique identifiers.
                    

        // And one non-primitive data type:

                // object for more complex data structures.

            
    //Alert, Prompt, Confirm
        alert("Skill Safari");

        let name = prompt("What is your name?", "");
        alert(name);
        //alert(`Your name is ${name}`);
        
        let batch = confirm("Are you the OFSD23C batch?");
        alert( batch ); 

    // Type conversion
    // String Conversion
        let val = true;
        alert(typeof val); // boolean

        val = String(val); // now value is a string "true"
        alert(typeof val); // string

    //    Numeric Conversion (both implicitly and explicitly)
        
        alert( "6" / "2" ); // 3, strings are converted to numbers
        let str = "123";
        alert(typeof str); // string

        let num = Number(str); // becomes a number 123

        alert(typeof num); // number
        
        let a = Number("an arbitrary string instead of a number");

        alert(a); // NaN, conversion failed


        // Numeric conversion rules:

        //     Value	            Becomes…
        //     undefined	        NaN
        //     null     	        0
        //     true and false	    1 and 0
        //     string	            Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 
                                    //If the remaining string is empty, the result is 0. 
                                    // Otherwise, the number is “read” from the string. An error gives NaN.

        alert( Number("   123   ") ); // 123
        alert( Number("123z") );      // NaN (error reading a number at "z")
        alert( Number(true) );        // 1
        alert( Number(false) );       // 0


JavaScript Program to Write to Console

// program to write to console

// passing number 
console.log(123);

// passing string
console.log('Skill Safari');

// passing variable
const x = 'Welcome';
console.log(x);

// passing function
function sayName() {
    return 'Welcome to SS';
}
console.log(sayName());

// passing string and a variable
const name = 'welcome';
console.log('Hello ' + name);

// passing object
let obj = {
    name: 'Skill Safari',
    age: 123
}
console.log(obj);