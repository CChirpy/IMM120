class Koopa {
  // Constructor function creates the object
  //a koopa has two animation sprites, so two images must be refered to in the parameters
  constructor(img1, img2, xPos, yPos) {
    this.img1 = img1;
    this.img2 = img2;
    this.xPos = xPos;
    this.yPos = yPos;
    this.pic = 1;
    this.counter = 0;
    this.frames = 8;
  }

  draw() {

    if (this.pic == 1) 
    {
      image(this.img1, this.xPos, this.yPos);
      this.counter++;
      if (this.counter >= this.frames) 
      {
        this.pic = -1;
        this.counter = 0;
      }
    } 
    else if (this.pic == -1) 
    {
      image(this.img2, this.xPos, this.yPos);
      this.counter++;
      if (this.counter >= this.frames) 
      {
        this.pic = 1;
        this.counter = 0;
      }
    }

  }

  moveGreen() {
    this.xPos += 0.75;
    if (this.xPos > width) {
      this.xPos = 0;
    }
  }

  moveRed() {}

}