const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

//Ground
    ground = new Ground(400,785,800,20)
//Platform
    platform1 = new Ground(350,700,270,15)
    platform2 = new Ground(600,550,200,15)
//LBoxes
//platform1
    block1 = new LBox (440,673,30,40)
    block2 = new LBox (410,673,30,40)
    block3 = new LBox (380,673,30,40)
    block4 = new LBox (350,673,30,40)
    block5 = new LBox (320,673,30,40)
    block6 = new LBox (290,673,30,40)
    block7 = new LBox (260,673,30,40)
//LmBoxes
    block8 = new  Lmbox (410,633,30,40)
    block9 = new  Lmbox (380,633,30,40)
    block10 = new Lmbox (350,633,30,40)
    block11= new  Lmbox (320,633,30,40)
    block12 = new Lmbox (290,633,30,40)
//Mboxes

    block13 = new  Mbox (380,593,30,40)
    block14 = new  Mbox (350,593,30,40)
    block15 = new  Mbox (320,593,30,40)
//Ubox
    block16 = new  Ubox (350,553,30,40)
//platform2
//Lboxes
    block17 = new  Lmbox (660,522,30,40)
    block18 = new  Lmbox (630,522,30,40)
    block19 = new  Lmbox (600,522,30,40)
    block20= new   Lmbox (570,522,30,40)
    block21 = new  Lmbox (540,522,30,40)
//Mboxes
    block22 = new  Ubox (630,482,30,40)
    block23 = new  Ubox (600,482,30,40)
    block24 = new  Ubox (570,482,30,40)
//Uboxes
    block25 = new  Mbox(600,442,30,40)   
//polygon
    polygon = new  Polygon(); 
//Slingshot
slingshot = new Slingshot(polygon.body,{x:100, y:500});
}

function draw(){
  background("black");
  Engine.update(engine);
  ground.display();
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(Polygon.body);
    }
}