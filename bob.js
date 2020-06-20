class Bob{
    constructor(x,y,radius,color){
       var  options = {
            restitution:0.3,
            friction:0.5,
            //density:1.2
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        World.add(world,this.body);
        
    }  
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        circle(this.x/300,this.y/300,this.radius);
        pop();
    }
}