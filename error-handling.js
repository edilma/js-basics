function getDayofWeek(day){
switch(day){
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wenesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    default:
        throw "Error: Invalid Day"
}

}

try{
    const nameDay= nameofWeek = getDayofWeek(3);
    console.log(nameDay);
}
catch(error){
    console.log("************");
    console.error(error);
    console.log("*************");
}

console.log ("We print this after everything");