class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length: 200,
            pointB:{x:this.offsetX , y: this.offsetY}
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA= this.rope.bodyA.position;
        var posB=this.rope.bodyB.position;
        push()
        strokeWeight(4);
        stroke("red")
        line(posA.x,posA.y,posB.x+this.offsetX,posB.y+this.offsetY);
        pop ()
    }
}