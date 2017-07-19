var x;
var y;

var xSpeed;
var ySpeed;

function setup(){
    createCanvas(500,500);
    background(200);
    x = 250;
    y = 250;
    xSpeed = random(-2,2);
    ySpeed = random(-2,2);
}


function draw(){
    background(200);
    ellipse(x,y,30,30);
    if (x>=485){
        xSpeed = -1;
    }else if (x<=15){
        xSpeed = 1;
    }
    
    if (y>=485){
        ySpeed = -1;
    }else if (y<=15){
        ySpeed = 1;
    }
    x += xSpeed;
    y += ySpeed;
}