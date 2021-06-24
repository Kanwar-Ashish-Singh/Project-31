const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var columns = [];
var columnHeight = 300;
var particles = [];
var plinkos = [];

function preload(){


}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies here.
  ground = new Ground(400, 690, 800, 20);

  for (var i=0; i<=width; i=i+80) {
      columns.push(newColumn(i,height = columnsHeight/2, 10, columnsHeight));
  }

  for (var j=75; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var j=50; j<=width-10; j=j+50){
       plinkos.push(new Plinko(j, 175));
  }

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }

   Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  

  drawSprites();




  for (var n=0; n<columns.length; n++){
    columns[n].display();
  }

  if (frameCount %60 === 0) {
     particles.push(new particles(random(width/2-30, width/2+30),10,10));
  }

  for (var h=0; h<particles.length; h++){
    particles[h].display();
  }

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  ground.display();

} 