var ghost1 , ghost2 , ghost3
var ghost1_img , ghost2_img, ghost3_img
var player
var player1_img,player2_img,jump_img
var background_img
var ground_img
function preload(){
ghost1_img = loadImage("assets/ghost-1.png");
ghost2_img = loadImage("assets/ghost-2.png");
ghost3_img = loadImage("assets/ghost-3.png");
player1_img = loadImage("assets/run-1.png");
player2_img = loadAnimation("assets/run-2.png","assets/run-3.png","assets/run-4.png");
jump_img = loadAnimation("assets/jump-1.png","assets/jump-2.png","assets/jump-3.png");
background_img = loadImage("assets/background-1.jpg");
ground_img = loadImage("assets/ground.png");
}

function setup(){

//background image


//creating top and bottom grounds
createCanvas(windowWidth,windowHeight)
player=createSprite(50,height-140,20,50)
//player.addImage(player1_img)
player.addAnimation("running",player2_img)
player.addAnimation("jump",jump_img)
ground = createSprite(width/2,height,width,2)
ground.velocityX = -2
ground.addImage(ground_img)
ground.x = width/2


}

function draw() {
  background(background_img)
//image(background_img,0,0,width,height)
 if(ground.x<=300){
   ground.x = ground.width/2
   
 }

          if(keyDown("right")){
          player.x += 3
          
          }
          if(keyDown("space")){
            player.velocityY = -10
            player.changeAnimation(jump_img)

            }
          player.velocityY = player.velocityY+0.5
          player.collide(ground)
    drawSprites()      
   
        
        
}

