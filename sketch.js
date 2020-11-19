var fixedRect, movingRect;
var testrect1, testrect2, testrect3, testrect4;

function setup() {

  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  testrect1 = createSprite(50,400,50,80);
  testrect1.shapeColor = "green";

  testrect2 = createSprite(150,400,50,80);
  testrect2.shapeColor = "green";

  testrect3 = createSprite(250,400,50,80);
  testrect3.shapeColor = "green";

  testrect4 = createSprite(350,400,50,80);
  testrect4.shapeColor = "green";

  testrect2.velocityY = -2;

}

function draw() {

  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,testrect1)){

    movingRect.shapeColor = "red";
    testrect1.shapeColor = "red";

  }else{

    movingRect.shapeColor = "green";
    testrect1.shapeColor = "green";

  }

  bounceOff(movingRect, testrect2);

  drawSprites();

}