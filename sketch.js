
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,200,30);
 	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj = new Stone(250,300,50,50);

	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	
	Engine.run(engine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy ,200,340,200,300);

	treeObj.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	groundObject.display();

	stoneObj.display();	

	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);

	textSize(20);
	text("Press Space To Get Another Chance To Play!", 150, 50);
}

function mouseDragged(){

	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){

	launcherObject.fly();

}

function detectollision(lstone,lmango){

  	mangoBodyPosition=lmango.body.position
  	stoneBodyPosition=lstone.body.position
  
  	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
  	if(distance<=lmango.r+lstone.r){
     
		Matter.Body.setStatic(lmango.body,false);
		
    }

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);

	}

}