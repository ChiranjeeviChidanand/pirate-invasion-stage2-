const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;
var backgroundImg,towerImg;
var canon;
var angle = 20
var cannonball 


function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic: true
  }
  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)

  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)

  angleMode(DEGREES);
  angle = 20

  canon = new Canon(180,110,130,100,angle)

  cannonball = new Cannon_Ball(canon.x,canon.y)
  

  
 
}

function draw() {
  // background(189);
  image(backgroundImg,0,0,width,height)
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)

  push() 
  imageMode(CENTER)
  image (towerImg,tower.position.x,tower.position.y,160,310);
  pop()

  canon.display()
  cannonball.display()

   
}

function keyReleased(){
  if (keyCode==DOWN_ARROW){
    cannonball.shoot()
  }
}
