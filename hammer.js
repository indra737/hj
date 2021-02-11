class Hammer{
    constructor(x,y,angle){
   
    var options= {
        restitution: 0.5,
        friction: 0.3,
        density: 2
    }

    this.body= Bodies.rectangle(x,y,20,130,options)
    Matter.Body.setAngle(this.body,angle);
    this.w=20;
    this.h=130
    World.add(world,this.body)
  
    }
   show(){
   push()
   var pos= this.body.position;
   var angle= this.body.angle;
      ellipseMode(CENTER);
      fill(70,40,30);
      
      translate(pos.x,pos.y)
     
      pos.x= mouseX
      pos.y=mouseY
      rotate(angle)
      rect(0, 0, this.h,this.w);
    pop()
   }
  }