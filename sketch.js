
var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 50,100, 50);
  movingRect = createSprite(200, 350, 70, 80);
  fixedRect.shapeColor="black";
  movingRect.shapeColor="black";
  fixedRect.velocityY=3;
  movingRect.velocityY=-3;
}

function draw() {
  background("yellow");  
  //movingRect.x= mouseX;
 // movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
     && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
     && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
     && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    fixedRect.shapeColor="white";
    movingRect.shapeColor="white";
  }
  else{
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }
   if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
       movingRect.velocityX *= -1;
       fixedRect.velocityX *= -1;
    }
    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
      && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
        movingRect.velocityY *= -1;
        fixedRect.velocityY *= -1;
      }

  drawSprites();
}