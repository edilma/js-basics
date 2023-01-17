// const primeNumber = [2,3,5,7,11,13];
// const car ={ brand: "Honda",
//             color: "red",
// }
//             year: 1984

// const evenNumber = [2,4,6,8]

const clog= (label,log)=> console.log(label,":" , log)

// const newArray = primeNumber;

// clog("original array",primeNumber);
// clog("new array", newArray);

// primeNumber.push(17);

// clog("original array",primeNumber);
// clog("new array", newArray);

// newArray.push(19);
// clog("original array",primeNumber);
// clog("new array", newArray);
//const newArray = [...primeNumber]; 

//clog("original array",primeNumber);
//clog("new array", newArray);

//primeNumber.pop();

// clog("original array",primeNumber);
// clog("new array", newArray);


// const newCar = {...car}
// const newNumberList = [...primeNumber,...evenNumber]
// const numberList2 = [primeNumber,evenNumber]

// clog("original object",car);
// clog("new object", newCar);
// clog("combined arrays", newNumberList);
// clog("combined arrays", numberList2);

// const mathMax = Math.max(...primeNumber);
// clog("Math max ",mathMax );

const number1 = [1,"3",7];
const number2 = [2,4,6,8];
const object1 ={ name: "nombre",
type: "type 1",
id: 0
}

const object2 ={ name2: "nombre2",
type: "type 2",
id: 1
}


const combineNumber =[...number1,...number2];
const combineNumber2 = [...number2, ...number1];
const combineObjArr= {...object1,...object2};

clog("combine array", combineNumber2);
clog("combine item ", combineObjArr);
