

class Paper {
    constructor(a, b,c) {
		var options ={
			isStatic:false,
		    restitution:0.3,
			friction:1.0,
			density:1.2
    }
     this.x = a;
     this.y = b;
     this.r = c;
     this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     this.image = loadImage("paper.png");
     World.add(world,this.body);
    }
    display(){
      //pos.y = mouseY;
      push();
      translate(this.body.position.x,this.body.position.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r,);
      pop();
    }
  }