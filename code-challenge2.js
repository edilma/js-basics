//create a function
// use the first number as the max
//loop through the list comparing the number

function getMax(arr){
    let max =0;
    for(let i=0; i<arr.length;i++){
        //console.log(arr[i]);
        if (arr[i]>max){
            max = arr[i];
            }
    }
    return max;
}
const myArr =[9,23,8,90,78];
console.log(getMax(myArr));
