const World=Matter.World; 
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine,ball,ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic:true
  } 
  ground=Bodies.rectangle(400,390,800,10,ground_option);
  World.add(world,ground);


  var ball_option={
    restitution:1.2
  } 
  ball=Bodies.circle(400,100,50,ball_option);
  World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  fill("red")  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  fill("blue")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
}