var monkey, monkey_running,monkeyi;
var banana ,bananaImage;
var ground,h,e;
var food,rock;
var game,play,end;
var play = 0;
var end = 1;
var game=play;


function preload(){
  
  
  monkey_running =loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png","monkey_9.png","monkey_10.png");
  
  monkeyi = loadImage("monkey_0.png");
  
  bananaImage = loadImage("banana.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(70,450,10,10);
  monkey.addAnimation("mon",monkey_running);
  monkey.scale=0.2;
  
  e = new Group();
  ground = createSprite(300,515,800,10);
  

}


function draw() {
 background("white");
  text("score: "+score,500,50);
  
  if(game===play){
 foods();
 if(keyDown("space")&&monkey.y >= 100){
   monkey.velocityY=-5
 }
    
monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
    
    if(monkey.isTouching(e)){
        e.setLifeTimeEach(-1);
    }
    
  }
  
 drawSprites(); 
}

function foods(){
  h=Math.round(random(1,6));

    
  if(h===6){
  if(frameCount%90===0){
  food = createSprite(650,300,10,10);
  food.x=Math.round(random(200,400))
  food.velocityX=-5; 
  food.addImage(bananaImage);  
  food.scale = 0.1;
  e.add(food);
  }
  }
}