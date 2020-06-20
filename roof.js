class roof{
    constructor(x,y,color){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,64,64,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
        this.color = color;
    }  
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill(this.color);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rect(this.x/300,this.y/300,64,64);
        pop();
    }
}