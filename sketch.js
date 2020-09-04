const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3;
var chain1, chain2, chain3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 80, 800, 20);
	ball1 = new ball(250, 200, 30);
	ball2 = new ball(300, 200, 30);
	ball3 = new ball(350, 200, 30);

	chain1 = new chain(ball1.body, {x: 240, y: 80});
	chain2 = new chain(ball2.body, {x: 300, y: 80});
	chain3 = new chain(ball3.body, {x: 360, y: 80});

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  chain1.display();
  chain2.display();
  chain3.display();

  drawSprites();
 
}


function mouseDragged(){
    
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    
}
