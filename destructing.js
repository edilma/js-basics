const clog=(label,log)=>console.log(`${label} : ${log}`);

const number = [1,2,3,4,5,7,8,100,23];
//const render = number[1];
const[a,b,c,d,e,f,g,h,i]= number;

const person = {
    firstname: "Edilma",
    lastname: "Riano",
    hair: "brown"
}

const person2 = {
    firstname: "Lucy",
    lastname: "Lee",
    hair: "brown"
}

const person3 = {
    firstname: "Peter",
    lastname: "Polanco",
    hair: "black"
}


const {firstname,lastname,hair} = person3;

//clog("old way", render);
clog("destructuring", b);

clog("destruction person hair", hair);
const sentence = `Hi ${firstname}`
console.log(sentence);

 
