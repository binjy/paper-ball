
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground,paperBall,dustbin,normalGround,dustbin2,dustbin3


function preload(){
  
  

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;


	


	//Create the Bodies Here.
   ground = new Ground(1600,600,900000,30)
  
 paperBall = new Paper(200,200,20,20)

   dustbin = new DustBin(1008,200,30,50)
   dustbin2 = new DustBin(1090,200,30,50)
   dustbin3 = new DustBin(1050,200,50,10)
  // fill("red")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 ground.display()
 // papaerBall.display()
 dustbin.display()
 dustbin2.display()
dustbin3.display()

paperBall.display()

  drawSprites();
 
}



function keyPressed() {
  
if (keyCode ===UP_ARROW) {
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,Y:-85})
}


}