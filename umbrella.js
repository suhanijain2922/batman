class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Matter.Bodies.circle(x,y,50,options)
        this.radius=50
        World.add(world ,this.body)
        this.image=loadImage("walking_1.png")

    }
    display(){
        imageMode (CENTER) 
        image (this.image,this.body.position.x,this.body.position.y+70,this.radius*4,this.radius*6)
    }
}