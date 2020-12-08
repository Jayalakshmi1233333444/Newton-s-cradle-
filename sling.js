class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.body=Constraint.create(options);
            World.add(world,this.body);
    }
    display(){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke("blue");
        strokeWeight(4);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
        
    }
}