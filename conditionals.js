//There are 3 main ways to create conditionals in code:
// 1. if (comes in many flavors)
// 2. switch (great for many different conditions)
// 3. ternary (shorthand for if/else)
// first let's setup some variables

const age = 19;

// Let's start with the most basic if statement

if (age>= 18){
    console.log("Welcome.  Come on in");
}

// What about people that aren't yet 18?
//Let's use an if...else

if(age>=19){
    console.log("Drink up");
}else{
    console.log("Here's some water");
}

// what if we have more than 2 posibilities?
// Then we can use an elseif

const hour =23;

if(hour< 11 ){
    console.log("Good Morning");
}else if(hour<17){
    console.log("Good Afternoon");
}else if(hour<22){
    console.log("Good evening");
}else{
    console.log("Go to bed");
}

// When dealing with many different conditions, we often use a switch

const youPet = "chupacabra";

switch (youPet){
    case "dog":
        console.log("woof woof");
        break;
    case "cat":
        console.log("meow meow");
        break;
    case "bird":
        console.log("tweet tweet");
        break;
    case "fox":
        console.log("What's the fox says");
        break;
    case "racoon":    
    case "lizard":
    case "snake":
        console.log("That's a crazy pet, yo!");
        break;
    case "turtle":
        console.log("I love turtles");
        break;
    default:
        console.log("Wow, I never even heard of that!");
}
