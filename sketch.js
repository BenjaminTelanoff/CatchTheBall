var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(255);
  levelOne();
  text("You're score is " + (score), width/6, height-20);
}

function levelOne() {
  text("level one", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
   ballx=random (width);
   bally=random (height); 
   score = score + 1;
  }
  line(ballx, bally, mouseX, mouseY);
   fill(0)  
  ellipse(ballx, bally, ballSize);
   fill(0)
  text(distToBall, width / 2, height- 40);
}
