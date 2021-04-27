var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,music
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg= loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    music= loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);
    
	//create fairy sprite and add animation for fairy
    fairy= createSprite(400,500)
	fairy.addAnimation("fairy",fairyImg)
	fairy.scale=0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	//write code to play fairyVoice sound
    if(star.width/2+fairy.width/2>star.x-fairy.x
		&&star.width/2+fairy.width/2>fairy.x-star.x
		&&star.height/2+fairy.height/2>star.y-fairy.y
		&&star.height/2+fairy.height/2>fairy.y-star.y){
		music.play()
	}
	


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>470&&starBody.position.y>470){
	Matter.Body.setStatic(starBody,true)
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10
	}

	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10
	}
}
