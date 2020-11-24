var gameState=0;
var game, title;
const Engine =Matter.Engine;
const World =Matter.World;
const Bodies= Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world= engine.world;
  title= new Start();
  ground = new Ground(displayWidth/2,displayHeight/2,500,displayHeight);

  
    game= new Game();
   ball=new Ball(displayWidth/2,displayHeight/2+200);

    
    

  
  
}

function draw() {
  background("blue");
  if(gameState===0){
    
    title.display();
    
  }
  if(gameState===1){
    game.display();
    ground.display();
    ball.display();
  }

   

  
}