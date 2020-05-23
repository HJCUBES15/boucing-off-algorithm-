//creating variables 
var fixedRect, movingRect;

function setup() {
  //creatingcanvas
  createCanvas(1200,800);
  //giving structure to variables
  fixedRect = createSprite(400, 100, 50, 80);
  //adding colour to variable
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
//adding velocity to variables
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
//boucing off the variables
  bounceoff(movingRect,fixedRect); 
  drawSprites();
}