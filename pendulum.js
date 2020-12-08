class Pendulum{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,r);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}