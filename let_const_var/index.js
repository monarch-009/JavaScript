//const -> constant-> cannot be reassigned
const id = 100;
//id = 200; //cannot reassign a constant
console.log(id);

//let -> can be reassigned
let firstName = 'Aditya';
firstName = 'Rohan'; //can be reassigned 
console.log(firstName);
let lastName; //undefined
console.log(lastName);

//var -> can be reassigned
var age = 30;
age = 40; //can be reassigned
console.log(age);
/*
why we should not use var -> because of issues with  block scope and function scope
it is a global variable
var is function scoped
let and const are block scoped
let and const are introduced in ES6
var is introduced in ES5
var can be reassigned
*/

sex = "male"; //global variable -- bad practice 
console.log(sex);

//Console table -> to print in table format 
console.table({id,firstName,lastName,age,sex}); //ES6

