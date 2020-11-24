class Ball{
    constructor(x,y){
        var options={
        restitution: 1.0,
        friction: 0.5,
        density: 1.0,
        }
        this.body= Bodies.circle(x,y,50);
        World.add(world,this.body);
        this.radius=50
    }
    display(){
        fill("brown");
        ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}