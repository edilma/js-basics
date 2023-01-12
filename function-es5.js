/*
const person = {
    firstName: "Edilma",
    lastName: "Riano"
}

function studentName(propFirstName, propLastName){
    const firstName = propFirstName;
    const lastName = propLastName;
    const fullName = firstName + " " + lastName;
    return fullName;
}
 
console.log(studentName("Tony", "Stark"));
console.log("Taylor", "Swift");

console.log(person.firstName, person.lastName);
*/


function sayHello(firstName = "stranger"){
    console.log("hi " + firstName);
}

const salutation = sayHello();


// function sumAdd(x=0,y=0){
//     let sum = x+y;
//     return sum;
// }

// console.log(sumAdd(100,1));