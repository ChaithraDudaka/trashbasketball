const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
function preload()
{
 trashImage = loadImage("dustbingreen.png");
 paperImage = loadImage("paper.png")
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,680,800,45);
	trash1 = createSprite(500,620,20,80);
	trash2 = createSprite(700,620,20,80);
	trash3 = createSprite(600,500,20,20);
	trash3.addImage(trashImage);
	trashImage.scale=0.1;
	paper1 = new Paper(200,200,70);
   

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  paper1.display();
  ground.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
	}
}




