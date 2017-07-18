var prompt = require('prompt-sync')();
var mashArray = ["75m", "Mario Bros.", "Onett", "Temple"];
var firstQuestion = [1,2];
var secondQuestion = ["Mario", "Sonic"];

function mash(){
    var firstAnswer = prompt("how many times will you attack");
    var secondAnswer = prompt("who will you attack");

    firstQuestion.push(firstAnswer);
    secondQuestion.push(secondAnswer);

}

function action(){
    console.log("how many times will you atack" )
}

function rand(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function displayAnswer() {
    var stage = mashArray[rand(mashArray.length)];
    var hits = firstQuestion[rand(firstQuestion.length)];
    var opponent = secondQuestion[rand(secondQuestion.length)];
    
    console.log("you fought" + opponent +
                "in the" + stage +
                "and hit them" + hits +
                "times, too bad, Sonicwins!");
}
mash();
displayAnswer();