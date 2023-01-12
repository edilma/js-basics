/* create your own person object with
first name
last name
fav color
hobby


create an array with your fav movie * 3

 create a function that generates the following...
1.  Hi my full name is $firstN $lastN.  Fav color is $favC and love $hobby.
2.  I like these 5 movies.  $movie0, $movie1
3. create a math fumction that takes 3 parameters
*/
//Identity
const person ={
    firstName : "Edilma",
    LastName : "Riano",
    favColor : "Burgundy",
    hobby : "Reading"
};

// likes
const favMovies =[
    "A few good men", 
    "Sideways", 
    "Adaptation"
];

function myLikes (firstName, lastName, favColor, hobby) {
    console.log("Hi my full name is "+ firstName + " " + lastName + ".  Mi favorite color is " + favColor + " and I love "+  hobby);
}

//functions
function myMovies (movie) {
   console.log(" I like these 5 movies :", movie[0],", ",movie[1], ",",movie[2]);
}

function calculateVolume(height=0,width=0,lenght=0){
    const volume = height * width * lenght;
    return volume;
};
const volume = calculateVolume(3,4,5);

//invoking functions
// const hobbies = myLikes(person.firstName, person.LastName, person.favColor, person.hobby, person.favMovies);


console.log("**************");
console.log (myMovies(favMovies));
console.log("*************");

console.log("**************");
console.log (myLikes(person.firstName, person.LastName, person.favColor, person.hobby, person.favMovies));
console.log("*************");
// myMovies(favMovies);

console.log("***************");
console.log("The volume of my cube is: ", volume)