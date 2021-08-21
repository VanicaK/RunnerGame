var road, runner;
var roadImg, runnerMove;
var leftBound, rightBound;


function preload(){
  roadImg = loadImage("path.png");
  runnerMove = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  road=createSprite(200,200,400,400);
  road.addImage("rd",roadImg);

  runner=createSprite(200,350,50,50);
  runner.addAnimation("ru", runnerMove);
  runner.scale=(0.05)

  leftBound=createSprite(50,200,10,400);
  leftBound.visible=false;

  rightBound=createSprite(350,200,10,400);
  rightBound.visible=false;
}

function draw() {
  background(0);

  runner.collide(leftBound);
  runner.collide(rightBound);

  road.velocityY=3;


  if (road.y>=400){
    road.y = road.width / 2;
  }

  if(mouseX<=330&&mouseX>=70){
    runner.x=mouseX;
  }
drawSprites();
}
