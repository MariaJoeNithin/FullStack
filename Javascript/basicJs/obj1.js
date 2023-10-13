//prototype
//syntax
//objectconstructorname.prototype.key='value';

//contructor function

function Item()
{
    this.name = 'waller',
    this.id = 123
}

// Creating Object
const item1 = new Item();
const item2 = new Item();


//adding property to constructor function
Item.prototype.cost=799;

//prototype value of item
console.log(Item.prototype);

//Inheriting the property from prototype
console.log(item1.cost);
console.log(item2.cost);

//adding a method to a constructor function
Item.prototype.order=function()
{
    console.log('You Ordered '+' '+ this.name);
}

item1.order();
item2.order();

//Changing Prototype
//If a prototype value is changed , then all the new objects will have the change property value 


//constructor function
function Item(){
    this.name = 'wallet' 
}

// add a property
Item.prototype.id=123;

// creating an object 
const item1= new item();

console.log(item1.id);

//changing the prototype value of prototype
Item.prototype={id:111};

// creating new object
const item3=new Item();
console.log(item3.id);
console.log(item1.id);

// prototype chaining

function Item()
{
    this.name='wallet';
}

//adding property
Item.prototype.name='Cloth';
Item.prototype.id='123';

const item1 = new Item();

console.log(item1.name);
console.log(item1.id);

// Access the prototype property 

function Item () {
    this.name = 'wallet'
}

// adding a prototype 
Item.prototype.id=123;

// creating object 
const item = new Item();

// accessing prototype property 
console.log(item.__proto__);

// In Javascript there are two kinds of object properties3

// getter
// In JavaScript , getter methods are used to access the properties of an object

const student ={
    firstname: 'Ram',

    //accessor property
    get getname(){
        return this.firstname;
    }
}
//accessing data property
console.log(student.firstname);//Ram

//accessing getter methods
console.log(student.getname);//Ram

//trying to access as a method
console.log(student.getname());

// Setter

// javascript.info 
// objects 
// literals
// computed properties
// for in loop 
// reference
// cloning 
// merging
// Object.assign
// real copy & shallow copy
// deepclone 
// structuredClone4
// Object.assign
// nested clone 
// spread index 
