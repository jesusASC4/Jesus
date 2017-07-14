var mashArray = ["75m", "Mario Bros.", "Onett", "Temple"];
var firstQuestion = [1,2];
var secondQuestion = ["Mario", "Sonic"];
var prompt = require("prompt", "sync");

function mash(){
    var firstAnswer = prompt("how many times will you attack");
    var secondAnswer = prompt("who will you attack");

    firstQuestion.push(firstAnswer);
    secondQuestion.push(secondAnswer);

}

function action(){
    console.log("how many times will you atack" + "firstAnswer)
}

