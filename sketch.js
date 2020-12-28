var PLAY=1;
var END=0;

var bom,bomI;
var apple,appleI;
var cherry,cherryI;
var dragon,dragonI;
var kiwi,kiwiI;
var knife,knifeI;
var lemon,lemonI;
var orange,orangeI;
var b1,bI;
var enemyGroup;
var fruitsGroup;



var score=0;
var hiScore=0;
var gameState=PLAY;
var gameOverImg,restartImg;


function preload(){
bomI=loadImage("bomo.png");
appleI=loadImage("appleo.png");
cherryI=loadImage("cherryo.png");
dragonI=loadImage("dragono.png");
//kiwiI=loadImage("kiwio.png");
lemonI=loadImage("lemono.png");
orangeI=loadImage("orangeo.png");
knifeI=loadImage("knifeo.png");
bI=loadImage("chopping.jpg");
restartImg = loadImage("restart.png")
gameOverImg = loadImage("gameOver.png")
}


function setup(){
  createCanvas(500,500);
  
  b= createSprite(250,250,500,500);
  b.addImage("bI",bI);
  b.scale=3;
  
 
  knife = createSprite(200,200);
  knife.addImage("Knife",knifeI);
  knife.scale=0.25;
  fruitGroup=new Group();
  enemyGroup=new Group();
 
  
}



function draw(){
  background("pink");

  text("Score: "+ score, 30,50);
  text("HighScore"+hiScore,120,50);

  fill("green");

  knife.y=World.mouseY;
  knife.x=World.mouseX;
  
  if(gameState===PLAY){
    b.velocityX=-4;
    if(b.x<0)
    {
      b.x=b.width/2;
    }
    fruits();
  }
  else if (gameState===END){
    b,velocityX=0;
  }
  drawSprites();
   
  
}

  
  function fruits()
  {
  if (World.frameCount%80===0)
  {
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    var r=Math.round(random(1,5));
    fruit.velocityX=-7;
    if(r===1){
      fruit.addImage(lemonI)
    }
    else if(r===2) {
      fruit.addImage(appleI);
    }
    else if(r===3) {
      fruit.addImage(cherryI);
    }
    else if(r===4) {
      fruit.addImage(dragonI);
    }
    else if(r===5) {
      fruit.addImage(orangeI);
    }
    
    fruit.y=Math.round(random(50,340));
    
    knife.depth=fruit.depth;
    knife.depth+=1;
    fruit.lifetime=100;
    
    fruitGroup.add(fruit);
  }
}
   

function reset(){
 
  gameState=PLAY;
  
  enemyGroup.destroyEach();
   friutsGroup.destroyEach();
  
   
  if (hiScore<score){
    hiScore=score  
  }
  score=0;
}

function Enemy(){
  if (World.frameCount%200===0){
  bom= createSprite(400,200,20,20);
  bom.addImage("moving",bomI);
  bom.y=Math.round(random(100,300));
  bom.velocityX=-8;
  bom.lifetime=50;
  enemyGroup.add(bom);  
 
  }
}


