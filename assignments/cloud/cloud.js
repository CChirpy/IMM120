class Cloud
{
  constructor(xPos, yPos, partSize, color, speed, alpha, offset)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.partSize = partSize;
    this.color = color;
    this.speed = speed;
    this.alpha = alpha;
    this.offset = offset;
  }
  
  draw()
  {
    //color and alpha value
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    
    //creates shapes - 5 ellipses
    ellipse(this.xPos, this.yPos, this.partSize);
    ellipse(this.xPos - this.offset, this.yPos - this.offset, this.partSize);
    ellipse(this.xPos + this.offset, this.yPos + this.offset, this.partSize);
    ellipse(this.xPos, this.yPos - this.offset, this.partSize);
    ellipse(this.xPos, this.yPos + this.offset, this.partSize);
  }
  
  move()
  {
    //moves on the x-axis, speed determines how fast clouds move
    this.xPos = this.xPos + this.speed;
    
    //warp back to the left side of the screen
    if (this.xPos > width)
      {
        this.xPos = 0;
      }
  }
}