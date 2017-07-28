function setup(){
    createCanvas(1200,1200);
    background(100);
}

var row1 = ["su","su,","su","nu","nu","nu"];
var row2 = ["su","nu","su","su","nu","nu"];
var row3 = ["nu","nu","su","nu","su","nu"];
var row4 = ["nu","su","nu","su","nu","su"];
var row5 = ["su","su","nu","su","nu","nu"];
var row6 = ["nu","nu","su","nu","nu","nu"];

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