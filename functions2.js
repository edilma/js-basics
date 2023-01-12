// There are 4 types of functions
// I. Do something /NO parameters
// II. Do something with parameters
// III. Return something no parameters
// IV. Return something with parameters

// I. Example
function sayHelloWorld(){
    console.log("Hello, world. ");
}

sayHelloWorld();

//I. Example does something with a parameter
function greetFriend(friendsName){
    console.log("Hello, ", friendsName);
}
greetFriend("Edilma");

// III. Returns something
function addTwoPlusTen(){
    const result = 2+10;
    return result;
}
const answer = addTwoPlusTen();
console.log(answer);

// IV.Example Return something with parameters
function addTwoNumbers(a,b){
    const result = a + b;
    return result;
} 
const  answer2 = addTwoNumbers(3,4);
console.log(answer2);

//Real world type example
function calculateSalesTax(subtototal, taxRate){
    const saleTax = (subtototal*taxRate).toFixed(2);
    return saleTax;
}
const taxes = calculateSalesTax(100,0.07);
console.log(taxes);
