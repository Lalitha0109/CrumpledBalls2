class Paper{
    constructor(){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body=Matter.Bodies.circle(100,630,70);
        Matter.World.add(world,this.body);
        this.image=loadImage("paper.png")

    }
    display(){
       // fill("white");
       //ellipse(this.body.position.x,this.body.position.y,50,50);
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,90,90);
        pop();
        };
}