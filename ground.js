class Ground{
    constructor(x,y,w,h){
   
    var options= {
       isStatic: true
    }
    this.body= Bodies.rectangle(x,y-20,w,h,options)
    this.w=w;
    this.h=h;
    World.add(world,this.body)
  
    }
   show(){
   push()
   var pos= this.body.position;
  
      rectMode(CENTER);
      fill(0,30,0);
      
     
      
      rect(pos.x, pos.y+20, this.w,this.h);
    pop()
   }
  }