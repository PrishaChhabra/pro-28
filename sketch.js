
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof1;
var rope1,rope2,rope3,rope4,rope5,bobDiameter,startBobPositionX,startBobPositionY;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
  world = engine.world;
  startBobPositionX=width/2; 
  startBobPositionY=height/4+500;
  bobDiameter=40
	//Create the Bodies Here.
  roof1=new Roof(width/2,height/4,width/7,20)

 bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
 bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
 bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
 bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
 bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



rope1=new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
rope2=new Rope(bobObject2.body,roof1.body,-bobDiameter*1,0);
rope3=new Rope(bobObject3.body,roof1.body,0,0);
rope4=new Rope(bobObject4.body,roof1.body,bobDiameter*1,0);
rope5=new Rope(bobObject5.body,roof1.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
 
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

  function keyPressed() {
    if (keycode=== UP_ARROW) {
  
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:255,y:-250});
    
    }
}












