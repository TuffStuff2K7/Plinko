var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var scores = [];

var divisionHeight=300;
var score = 0, count = 0;
function setup() {
  
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {    
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }
    
    for (var k = 0; k < 10; k++)
    {
      scores[k] = Math.round(random(0,5))*50;
    }
}

function draw() {
  
  background("black");
  textSize(20)
  textAlign(CENTER,CENTER);
  text("Score : "+score,60,30);
  
  text(mouseX + " " + mouseY, mouseX, mouseY);
  
  text(scores[0],40,760);
  text(scores[1],120,760);
  text(scores[2],200,760);
  text(scores[3],280,760);
  text(scores[4],360,760);
  text(scores[5],440,760);
  text(scores[6],520,760);
  text(scores[7],600,760);
  text(scores[8],680,760);
  text(scores[9],760,760);

  if(count>=5){
    fill("white");
    textSize(60);
    text("Game Over",width/2,height/2+40);
  }

  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  for (var j = 0; j < particles.length; j++) { 
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) { 
   divisions[k].display();
  }
  
  if(count===5 && 
    particles[0].body.position.y>500 && 
    particles[1].body.position.y>500 && 
    particles[2].body.position.y>500 &&
    particles[3].body.position.y>500 &&
    particles[4].body.position.y>500){
    for(var i = 0; i < 5; i++){
      particles[i].calc();
    }
    count++;
  } 

}

function mousePressed(){
  if(count<5){
    particles.push(new Particle(mouseX,10,10));
    count++;
  }

}