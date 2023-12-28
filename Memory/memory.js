// Primitive -> stored in stack
// Reference -> stored in heap

let name1 = "Aditya Singh";

let name2 = name1; //copy by value
name2 = "Rahul Singh"; //copy by value  

console.log(name1);
console.log(name2);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne; //copy by reference
userTwo.email = "adi@gmail.com"


console.log(userOne);
console.log(userTwo);
