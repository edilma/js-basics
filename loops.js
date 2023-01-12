// /****** Do While ******/
// console.log("Do while loop \n***********");

// let i =0;
// do {
//     i++;
//     console.log("This is number ", i);

// } while (i<10);

// /* ********* While Loop *********/
// console.log("While Loop\n ********");
// let j =0;
// while(j<10){
// console.log ("This is # ", j)
// j++;
// }


// // /* ********* For Loop with Break *********/
// for (let i=0; i<10; i++){
//     //convert this to ternary
//     if(i==5){
//         break;
//     }
//     console.log("This is iteration # ",i);
// }
// Iterate over properties of an object
// //*********For in ******** */
// const person = {
//     firstName:  "Edilma",
//     lastName:   "Riano",
//     age:        50
// }
// console.log(person);

// for (let i in person){
//     console.log("key => ", i);
//     console.log("value => ", person[i],"\n")
//     if(person[i]=="Riano"){
//         break;
//     }
//}

// Iterate over properties of an object
// //*********For of Object ******** */

const car = ["ford","honda","toyota","jeep"];
    
for(let i of car){
    console.log("value => ", i);
}

for (let i in car){
    console.log("value =>", car[i]);
}


