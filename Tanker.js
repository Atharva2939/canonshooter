class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: false
     }
    
    this.tanker=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.tanker)
  }
    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
     // this.image = loadImage("C:\Users\Amit\Desktop\Conflict Images");
     var pos =this.tanker.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    }
  }

