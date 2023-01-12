const days={
1: "Monday",
2: "Tuesday",
3: "Wenesday",
4: "Thursday",
5: "Friday"}
function getDayofWeek(dayNumber){
    const dayName = days[dayNumber];
    if (dayName) {
        return dayName;
    }
    throw "ERROR, invalid month";
}


try{
    const nameDay= nameofWeek = getDayofWeek(7);
    console.log(nameDay);
}
catch(error){
    console.log("************");
    console.error(error);
    console.log("*************");
}
console.log ("We print this after everything");
