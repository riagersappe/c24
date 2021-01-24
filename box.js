class box {
    constructor(x,y,w,h){
        var ground_options={
  
            isStatic:false,
            restitution:0.7
        
          }

        this.body=Bodies.rectangle(x,y,w,h,ground_options);
        World.add(myworld,this.body);

        this.w = w
        this.h = h
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("green") 
        rectMode(CENTER) 
        rect(0,0,this.w,this.h)
        pop()
    }
}