const name = "Aditya";
const repoCount = 20;

//console.log("Hello " + name + ", you have " + repoCount + " repositories"); //old way

const greeting = `Hello ${name}, you have ${repoCount} repositories`; //new way using template literals
console.log(greeting);

const  name2 = new String("Rohan");
console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toUpperCase()); 
console.log(name2.charAt(2)); 
console.log(name2.indexOf("o")); 

const name3 = name2.substring(0,3);
console.log(name3);

const name4 = name2.slice(-5,3);
console.log(name4);

const nametrime = "     Aditya     ";
console.log(nametrime.trim());

const url = "http://www.google.com";
console.log(url.replace("http","https"));

