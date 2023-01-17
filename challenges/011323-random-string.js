function convertRandomString (str = ""){
const newStr = str.toLowerCase()+".";
console.log(`the new string is ${newStr}`)
const firstLetter = str[0].toUpperCase();
newStr.charAt(0).replace(str[0].toUpperCase());

    
    return newStr

}

const word = "THIS is the sentence";
console.log(convertRandomString(word));


//console.log ("hello")


const person = {name:"Todd", age: 46, awesome: true}

 const new1= person.name = "pepe";

 console.log(new1)
const new2 = person["name"] ="ramon"
console.log(new2)

function AddNumbers(a,b) {return a+b;}

console.log(AddNumbers(4,5))
function countToTen(){
    for (let i = 0; i < 11; i++) {
    console.log(i);
        
    }
}


countToTen();