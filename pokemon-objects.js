function Pokemon(name, type, hp, attack, defense, legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.legend = legend
}

var sharpedo = new Pokemon("Sharpedo", "water",70,120,40,false);
var groudon = new Pokemon("Groudon", "ground",100,150,140,false);
var deoxys = new Pokemon("Deoxys", "psychic",50,150,50,false);
var mewtwo = new Pokemon("Mewtwo", "psychic",106,110,90,false);
var luxray = new Pokemon("Luxray", "electric",80,120,79,false);
var rayquaza = new Pokemon("Rayquaza", "dragon",105,150,90,false)

var roster = [sharpedo,groudon,deoxys,mewtwo,luxray,rayquaza];

function printRoster(roster){
    console.log("Printing Roster!");
    for(var i=0;i<roster.length;i++){

    }
}

function pokemonAttacked(roster){
    for (var i=0; i<roster.lenght; i++){
        roster[i].hp = roster[1].hp - 10;
    }
    printRoster(roster);
}

printRoster(printRoster);
console.log("Pokemon Attacking");
pokemonAttacked(pokemonRoster);