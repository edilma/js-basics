function sayHello(){
    console.log("Hello There");
}

function goSlow(){
    setTimeout(()=>console.log("slow..."),500);
}


function sayGoodbye(){
    console.log("Goodbye");
}

sayHello()
sayGoodbye()

//what if i want to guarantee that hello comes before goodbye

function sayHelloThen(next){
    console.log("Hello there!")
    next();
}

sayHelloThen(()=>("Goodbye!"));