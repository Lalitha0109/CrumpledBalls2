
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	crumpledball=new Paper();
	dustbin1=new Dustbin(950,610,20,160);
	dustbin2=new Dustbin(1140,610,20,160);
	dustbin3=new Dustbin3(1045,680,175,20);
	//dustbin4=new Dustbin(738,680,20,20);


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  rectMode(CENTER);
  crumpledball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:85,y:-85});
		

	}
}



