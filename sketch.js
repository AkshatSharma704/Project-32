const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var ball, ballimg;
var slingshot;
var platform;
var backgroundImg;
var score = 0;
function preload(){
  getBackgroundIMG();
  ballimg = loadImage("Images/polygon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 390, 900, 20);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  platform = new Ground(385,295,240,20);

  ball =  Bodies.circle(90,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball, {x:100, y:200});

  Engine.run(engine);
}

function draw() {
  if(hour>= 06 && hour<= 19){
    background(0,0,0);
  }
else{
    background(0,255,255);
}
  
  noStroke();
  textSize(35);
  fill("white");
  text("Score: " + score, width-300, 50);

  ground.display();
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
  platform.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  imageMode(CENTER);
  image(ballimg, ball.position.x, ball.position.y, 40, 40);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32) {
    slingshot.attach(this.ball);
  }
}

async function getBackgroundIMG(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if(hour>= 06 && hour<= 19){
      background(0,255,255);
  }
  else{
      background(0,0,0);
  }
}