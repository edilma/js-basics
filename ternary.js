const gender = "ma";

const greeting = (gender ==="male")? "Hello Sir" : "Hello ma'am";

console.log(greeting); 

const age = 51;
const message = (age>=21)
                ? "Drink up!"
                : "Have some water";

console.log(message);

// Yes, we can nest ternaries..

const message2 = (age>=21)
                ? "Drink all you want"
                : (age>=18)
                    ? "Have some more water"
                    : "Please leave now";

console.log(message2);
console.log ("hola"); 
