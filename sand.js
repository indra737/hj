class Sand{
  constructor(x,y){
 
  var options= {
      restitution: 1,
      friction: 5,
      density: 0.001
  }
  this.body= Bodies.circle(x,y,5,options)
  this.r=50;
  World.add(world,this.body)

  }
 show(){
 push()
 var pos= this.body.position;
 var angle= this.body.angle;
    ellipseMode(CENTER);
    fill(0,0,255);
    noStroke()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipse(0, 0, this.r,this.r);
  pop()
 }
}