class Drops{
  constructor(x,y){
    var options={
        isStatic:false
    }
    this.body=Matter.Bodies.circle(x,y,5,options)
    this.radius=5
    World.add(world ,this.body)
   
  }  
  display(){
      push()
      fill("blue")
    ellipseMode (CENTER)
    ellipse (this.body.position.x,this.body.position.y,this.radius,this.radius)
    pop ()
    
  }
  update(){
      if(this.body.position.y>height ){
          Matter.Body.setPosition(this.body,{x:random (0,800),y:random (0,800)})

          
      }
  }
}