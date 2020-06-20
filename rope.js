/*class Rope{
    constructor(bodyA,bodyB,offX,offY){
        this.offX = offX;
        this.offY = offY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness:0.04,
            pointB : {x:this.offX, y:this.offY}
        //    length:300,
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
       // fill("white");
        strokeWeight(3);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}*/
class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness:0.04,
        //    length:300,
            
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
       // fill("white");
        strokeWeight(3);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}