class Paper{
    constructor (x,y,r){
   var options = {
    isStatic:true,
    restitution:0.3,
    density:1.2,
    friction:0.5
   }
   this.x=x
   this.y=y
   this.r=r
   this.body = Bodies.circle(this.x,this.y,this.r/2,options)
   World.add(world, this.body);    
}
Display()
{
    var paperpos = this.body.position;
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill("red")
    pop()
}
};
