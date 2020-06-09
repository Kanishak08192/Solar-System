class Sun{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Sun.jpg");
        World.add(world, this.body);
      }
      display(){
   
      
        push();
                
    if(this.body.position.x === 100){
      this.width =  this.width +2;
      this.height =  this.height +1;
    }

    if(this.width === 700){
      mercury.addImage("mercury",download_img);
  }

  if(this.width === 1000){
    venus.addImage("venus",download_img);
}


   if(this.width === 1500){
       earth.addImage("earth",download_img);
  }

  if(this.width === 2000){
    mars.addImage("mars",download_img);
}

if(this.width === 2300){
  jupiter.addImage("jupiter",download_img);
}

if(this.width === 3000){
  satrun.addImage("satrun",download_img);
}

if(this.width === 3500){
  neptune.addImage("neptune",download_img);
}

if(this.width === 3500){
  uranus.addImage("uranus",download_img);

  
}

  

  console.log(this.width);

        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}