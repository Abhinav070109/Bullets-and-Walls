var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  
 bullet = createSprite(50, 200, 30, 5);
 wall = createSprite(1100,200,thickness,height/2);
 bullet.velocityX = speed;
 bullet.shapeColor = "white";
 wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall))
 {
  bullet.velocityX = 0;
 
  var deformation = 0.5 * weight * speed * speed;

   if(deformation > 10)
   {
    bullet.shapeColor = color(225,0,0);
   } 
   
  if(deformation < 10)
   {
    bullet.shapeColor = color(0,255,0);
   } 
}

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}