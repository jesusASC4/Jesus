/*var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var n = prompt('How many more times? ');

 var counter = i;
while(counter < 11) {
    console.log(counter);
    counter++;
}*/

var prompt = require("prompt-sync")();
var money = 1000;
var items = [ ];

while (money > 99) {
    console.log("you have $" + money + "left, shirt = 100, computer = 500.");
    var answer = prompt("which item do you want to buy?");
    if(answer == "shirt") {
    money -= 100;
    tems.push("shirt");
    console.log("you bought the shirt");
}
else if (answer == "computer") {
    } 
else if{
    console.log("i didn't understand yuor answer")
}
