
let x = 450;
let y = 450
let speed = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
background(255,0,390);
}
function draw() {
ellipse(x,mouseY,pmouseX,pmouseY);
 ellipse(mouseX,y,pmouseY, pmouseX);
stroke(22);
if (x+60 > width|| x < 60){speed = -speed;}
x = x + speed;
  if (y+60 > height|| y < 60){speed = -speed;}
y = y + speed;

if(mouseIsPressed){ fill(random(100,300),random(100,300),random(100,300),random(100,300));/*fill(255,0,490,20);*/}
  
function KeyPressed(){if (value === 1){
saveCanvas('myCanvas','png'); 
