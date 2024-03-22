//If & If-Else Conditions:
let electricity: string = "OFF"
if (electricity == "ON") {
    console.log("Ac will work");
}
else {
    console.log("Ac will not work");
}

//Else if Statement:
let time: number = 20
if ((time >= 1) && (time <= 11)) {
    console.log("Good Morning");
}
else if ((time >= 11) && (time <= 15)) {
    console.log("Good Afternoon");
}
else if ((time >= 15) && (time <= 18)) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}