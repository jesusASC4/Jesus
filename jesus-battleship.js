function setup(){
    createCanvas(1200,1200);
    background(100);
}

var row1 = ("su","su,","su","nu","nu","nu");
var row2 = ("su","nu","su","su","nu","nu");
var row3 = ("nu","nu","su","nu","su","nu");
var row4 = ("nu","su","nu","su","nu","su");
var row5 = ("su","su","nu","su","nu","nu");
var row6 = ("nu","nu","su","nu","nu","nu");

var board = [row1,row2,row3,row4,row5,row6];


function draw(){
        var w = 200;
        var h = 200;
        strokeWeight(10);
    for(var i=0;i<6;i++){
        for(var j=0;j<6; j++){
            if(board[i][j] == "nu"||board[i][j] == "su"){
                fill(200)
            }
            
            else if(board[i][j] == "nu"){
                fill(0);
            }
            else if(board[i][j] == "su"){
                fill(250,0,0);
            } 
            
            rect(i*w,j*h,w,h);
        }
    }    
};













       /* rect(x,y,w,h)
        fill(0,140,255);
        rect(x,y,+200,w,h);
        fill(255);
        rect(x,y,+400,w,h);
        fill(0,140,255);
        rect(x,y,+600,w,h);
        fill(255);
        rect(x,y,+800,w,h);
        x +=200
        fill(0,140,255);
        rect(x,y,w,h);

        rect(x,y,+200,w,h);

    }
}*/
 
   /*rect(0,0,200,200);
    rect(0,200,200,200);
    rect(0,400,200,200);
    rect(0,600,200,200);
    rect(0,800,200,200);
    rect(200,0,200,200);
    rect(400,0,200,200);
    rect(600,0,200,200);
    rect(800,0,200,200);
    rect(200,200,200,200);
    rect(400,400,200,200);
    rect(600,600,200,200);
    rect(800,800,200,200);
    rect(200,600,200,200);
    rect(600,200,200,200);
    rect(400);*/
