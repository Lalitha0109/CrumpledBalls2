class Dustbin3{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            friction:0.5
        }
        this.body=Matter.Bodies.rectangle(x,y,w,h,options);
        Matter.World.add(world,this.body);
        this.width=w;
        this.height=h;
        this.image=loadImage("dustbingreen.png")
        
    }
    display(){
        push()
        //translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,1045,590,250,200);
        pop();
        
    }
}