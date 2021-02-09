const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[]
var maxdrops=100;
var thunder;
function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(800,700)
    umbrella=new Umbrella(200,450)
  if(frameCount%100===0){

  
    for(var i=0;i<maxdrops;i++){
        drops.push(new Drops(random (0,800),random (0,800)))
    }
}
}

function draw(){
    Engine.update(engine)
    background("black")
    umbrella.display()
  rand = Math.round(random(1,4))
  if(frameCount%80===0){
      thunder=createSprite(random(10,750),random(10,30),10,10)
      switch(rand){
          case 1:
              thunder.addImage(thunder1);
              break;
              case 2:
                  thunder.addImage(thunder2);
                  break;
                  case 3:
                      thunder.addImage(thunder3);
                      break;
                      case 4:
                          thunder.addImage(thunder4);
                          break;
                          default:
                              break;
      }
      thunder.scale=random(0.3,0.7);
      thunder.lifetime=50
  }
  
    for(i=0;i<maxdrops;i++){
        drops[i].display();
        drops[i].update();
    }
   
drawSprites();
}   

