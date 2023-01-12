//const firstName = "edilma";
//const lastName ="Riano"

const person = {
    firstName : "Edilma",
    lastName : "Riano",
    age : 50
}
// dot notation
person.firstName;

// bracket notation
person["lastName"];

person.firstName = "Tony";

person.height = 178;

//deleting a property

delete person.height;

console.log("hello " + person.firstName + " " + person.lastName);
//console.log("age", person.age);
console.log ("person object: " ,person);
//console.log("height: ", person["height"]);

