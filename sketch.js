
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,string1,string2,string3,string4,string5;
function preload()
{
	
}

function setup() {
	createCanvas(3000,900);


	engine = Engine.create();
	world = engine.world;
console.log(height);
	//Create the Bodies Here.
bob1=new Pendulum(750,200,20);//2nd bob
bob2=new Pendulum(700,300,20);
 bob3=new Pendulum(800,300,20);
 bob4=new Pendulum(850,300,20);
 bob5=new Pendulum(900,300,20);
string1=new Sling(bob1.body,{x:750,y:200});//2nd
string2=new Sling(bob2.body,{x:700,y:200});
string3=new Sling(bob3.body,{x:800,y:200});
string4=new Sling(bob4.body,{x:850,y:200});
string5=new Sling(bob5.body,{x:900,y:200});

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("black");
  
  bob1.display();
   bob2.display();
  bob3.display();
   bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
  
}


