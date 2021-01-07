var fixedRect;
var movingRect;
var bounceMan

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 20, 80);  
  movingRect=createSprite(400, 200, 50, 50);
  bounceMan =createSprite(100,50,25,25);
  bounceMan.velocityX =5;
  //bounceMan.velocityY =5;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  

}
function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y =World.mouseY;
  //console.log(movingRect.x-fixedRect.x);
  if (fixedRect.y-bounceMan.y <fixedRect.height/2 + bounceMan.height/2&&bounceMan.y -fixedRect.y <bounceMan.height/2+fixedRect.height/2){
    bounceMan.velocityY=bounceMan.velocityY * -1;
  }
  if (fixedRect.x-bounceMan.x <fixedRect.width/2 + bounceMan.width/2&&bounceMan.x -fixedRect.x <bounceMan.width/2+fixedRect.width/2){
    bounceMan.velocityX=bounceMan.velocityX * -1;
  }
  if (fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2&&movingRect.x -fixedRect.x <movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y <fixedRect.height/2 + movingRect.height/2&&movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2){
       fixedRect.shapeColor="red";
      }
  else{
      fixedRect.shapeColor="green";
     movingRect.shapeColor="green";
  }
  drawSprites();
}

