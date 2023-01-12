function doSomething(){
    console.log("SOMETHING");
}

console.log("START")

setTimeout (doSomething,0);

setTimeout(function doSomethingElse(){
    console.log("OTHER THING");
},1500);

setTimeout(function (){
    console.log ("Two second OTHER THING");
},500)

setTimeout(()=>{console.log("THIRD other thing")},100);


console.log ("END");