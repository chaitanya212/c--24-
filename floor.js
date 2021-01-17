class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic :true,
            friction : 0.3,
            density: 1
        }
        
        this.width = width;
        this.height = height;
        this.ground = Bodies.rectangle(x,y,width,height,options)
       
      World.add(world, this.ground);
    }

    display(){
       stroke("green");

       strokeWeight(5);

       fill("grey")

        rectMode(CENTER);

        rect(this.ground.position.x, this.ground.position.y, this.width, this.height)
    }
    }