class Polygon {
    constructor(x, y) {
      var options = {
         isStatic:false,
         restitution:0.3,
         friction :0.5,
         density:1.2
      }
      
    this.body = Bodies.circle(50,200,20);
     
      this.image=loadImage("Sprites/Hex.png");
           World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      
   
    //fill("red");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,40,40);
      
      
    }
  };
  