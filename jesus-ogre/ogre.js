var HP = 100;
var gold = 0;
var numDefeated = 0;

function updateStats() {
    $("stats").text"HP: " + HP + "// Gold: " + gold + " // Ogres Slain:" + numDefeated);
}
function attack() {
    if (HP > 0){
        if(Math.random() * 100 > gold){
            $("#ogres").prepend(
                "<p>You Won! + 10 gold.</p>"
            );
        }
    }
}
function setup() {
    //title
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");

//Status Section
    $("body").append(
        "<div><h3>STATS</h3><p id='stats'></p></div>"
    );        
    $("body").append(
        "<button onclick='attack()'>Attack the Ogre!</button>"
    );
    $("body").append(
        "<div id='ogres'></div>"
    );
    updateStats();
};

$(document).ready(setup);