class LBox extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);   
    this.Visiblity = 255;
  }
  display(){
   
    fill(" lightBlue");
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       rect(this.body, this.body.position.x, this.body.position.y, 30, 40);
       pop();
     }
     
   }
  
  
  
};
