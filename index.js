//seperation of content and behavior

//This is my first javascript code!
console.log("Radhe Radhe");

//--------------------Variables--------------------
//Cannot be a reserved keyword
//Should be meaningful names
//Cannot start with a number (1name)   
//Cannot contain a space or hyphen (-)

let name = 'Rohan';
console.log(name);

let firstName = 'Rohan'; //camel notation 
let lastName = 'Singh'; //camel notation
console.log(firstName,lastName);

//--------------------Constants--------------------
const interestRate = 10;
//interestRate = 1; //cannot reassign a constant
console.log(interestRate);

//--------------------Primitive/Value Types--------------------
//String, Number, Boolean, undefined, null
let name1 = 'Rohan'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName1 = undefined; //undefined
let selectedColor = null; //null
console.log(name1,age,isApproved,firstName1,selectedColor);

//--------------------Dynamic Typing--------------------
//Javascript is a dynamic language
//Types are associated with values not variables

// typeof name1 //string
// name1 = 1;
// typeof name1 //number

//--------------------Reference Types--------------------
//Object, Array, Function

//Object
//Object is a collection of key-value pairs
//Object Literal    
let person = {
    name: 'Rohan',//'name' is a key and 'Rohan' is a value
    age: 30 //key-value pair
};
console.log(person);

//Dot Notation
person.name = 'John';
console.log(person.name);

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

//Array 
let selectedColors = ['red','blue']; //Array Literal
console.log(selectedColors);



