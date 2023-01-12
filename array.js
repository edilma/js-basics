const person = {
    firstName : "Edilma",
    lastName : "Riano",
    age : 50
}

const personArray =[
    "edilma", //0
    "riano",//1
    50 //2
];
const fullName =personArray [0] + " "+ personArray[1];

personArray[0] = "Tony";
personArray[3] = "Antoniette";
personArray[5] = "new person";

const firstName =personArray[0];
const totalLenght = personArray.length;

console.log ("Array lenght :" , totalLenght);
console.log(fullName);


console.log(firstName);

