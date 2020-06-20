
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var counter, counter2;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	counter = 0;
	counter2 = 500;

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	bobby = new Bob(200+470,500,32,"lime");
	bill = new Bob(264+470,500,32,"aqua");
	ben = new Bob(329+470,500,32,"magenta");
	brook = new Bob(394+470,500,32,"yellow");
	blake = new Bob(459+470,500,32,"red");

	bobby2 = new roof(200+470,200,"lime");
	bill2 = new roof(265+470,200,"aqua");
	ben2= new roof(330+470,200,"magenta");
	brook2 = new roof(395+470,200,"yellow");
	blake2 = new roof(460+470,200,"red");

	bobby3 = new Rope(bobby.body, bobby2.body);
	bill3 = new Rope(bill.body, bill2.body);
	
	ben3 = new Rope(ben.body, ben2.body);
	brook3 = new Rope(brook.body, brook2.body);
	blake3 = new Rope(blake.body, blake2.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  bobby3.display();
  bill3.display();
  ben3.display();
  brook3.display();
  blake3.display();
  
  bobby.display();
  bill.display();
  ben.display();
  brook.display();
  blake.display();

  bobby2.display();
  bill2.display();
  ben2.display();
  brook2.display();
  blake2.display();
  drawSprites();
  Engine.update(engine);
 
  keyPressed();
}

function keyPressed() {
	if(keyCode == UP_ARROW && counter2 > 500){
		Matter.Body.applyForce(bobby.body,bobby.body.position,{x:-0.08,y:-0.08});
		//counter += 1;
		counter2 = 0;
	}
	else if(bobby.body.position.x > 669 && bobby.body.position.x < 671){
		counter2 += 1;
		console.log(counter2);
	}
	
	
}

