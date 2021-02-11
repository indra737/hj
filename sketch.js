
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sands=[]
var ground;
var hammer
var rock;
function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;
	for(var i=0;i<1;i++){
		sands.push(new Sand(width/2,height-70))
	}
	ground= new Ground(width/2,height-10,width,20)
	hammer = new Hammer(0,0,PI/8)
   rock= new Box(width-500,height-100,70,70)
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  for(var i=0;i<sands.length;i++){
	  sands[i].show()
  }
ground.show()
 hammer.show()
 rock.show()
}



