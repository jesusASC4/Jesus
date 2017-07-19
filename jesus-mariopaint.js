function setup() {
  createCanvas(500,500);
  background(100);
 
}



function mouseDragged() {
    rect(mouseX,mouseY,random(30),random(20),random(55),random(55),random(20));
    fill(mouseX,mouseY,random(1,2,0));
    quad(mouseX,mouseY,random(38),random(500),random(86),random(500),random(69),random(500),random(30),random(500));
    triangle(mouseX,mouseY,random(500),random(500),random(500),random(500));
    arc(mouseX,mouseY,50, 50, 80, 80, 0, PI+QUARTER_PI, PIE);
    ellipse(mouseX,mouseY,random(80),random(80));
    
}

function keyPressed(){
    if (key==="s"){
        saveCanvas("myPicture","jpg");
    }
}