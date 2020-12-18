class MarioBlock {
  // Constructor function creates the object
  constructor(img, xPos, yPos) {
    this.img = img;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  draw() {
    image(this.img, this.xPos, this.yPos);
  }
}
