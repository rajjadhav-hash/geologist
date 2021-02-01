
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,400,1200,40);
	hammer=new Hammer(200,100,900,20);
	stone=new Stone(400,370,70,70);
	rubber=new Rubber(900,390,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  hammer.display();
	stone.display();
	rubber.display();
}



