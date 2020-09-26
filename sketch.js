var object1,object2,object3,object4;
function setup() {
  createCanvas(800,400);
  fobject1=createSprite(100,200,10,70);
  mobject2=createSprite(700,200,70,10);
  fobject1.shapeColor="green";
  mobject2.shapeColor="green";
  sobject3=createSprite(100,100,10,70);
  bobject4=createSprite(700,100,70,10);
  sobject3.shapeColor="blue";
  bobject4.shapeColor="blue";
  sobject3.velocityX=3;
  bobject4.velocityX=-3;
dobject1=createSprite(150,120,10,70);
vobject2=createSprite(150,400,10,70);
dobject1.velocityY=3;
vobject2.velocityY=-3;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  mobject2.x=mouseX;
  mobject2.y=mouseY;
  isTouching(fobject1,mobject2);
  
  bounceOff(sobject3,bobject4);
  bounceOff(dobject1,vobject2)
}
function isTouching(object1,object2){
if(object2.x-object1.x<object1.width/2+object2.width/2 && 
  object1.x-object2.x<object2.width/2+object1.width/2 && 
  object2.y-object1.y<object2.height/2+object1.height/2 &&
  object1.y-object2.y<object1.height/2+object2.height/2){
object1.shapeColor="red";
object2.shapeColor="red";

}
else{
  object1.shapeColor="green";
  object2.shapeColor="green";

}
}
function bounceOff(object3,object4){
if( object3.y-object4.y<object3.height/2+object4.height/2 &&
  object4.y-object3.y<object4.height/2+object3.height/2){
object3.velocityY=object3.velocityY*(-1);
object4.velocityY=object4.velocityY*(-1);

}


if(object3.x-object4.x<object3.width/2+object4.width/2 &&
  object4.x-object3.x<object4.width/2+object3.width/2){
object3.velocityX=object3.velocityX*(-1);
object4.velocityX=object4.velocityX*(-1);


}


}
