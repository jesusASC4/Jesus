var userchoice = "r"
var choices = ["r","p","s"];
var compchoice = choices[Math.floor(Math.random()*3)];

console.log("userchoice: "+userchoice);
console.log("computer choice: "+compchoice);

if (userchoice == compchoice) {
    console.log("draw game");

}
else if (userchoice=="r"){
    if (compchoice=="p"){
        console.log("computer wins");
}
else if (compchoice=="s"){
    console.log("human wins");
}
