class Cloud
{
  constructor(xPos, yPos, partSize, color, speed, alpha)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.partSize = partSize;
    this.color = color;
    this.speed = speed;
    this.alpha = alpha;
  }
  
  draw()
  {
    fill(this.color);
    
  }
  
  move()
  {
    this.x + this.speed;
    if (this.x > width)
      {
        this.x = 0;
      }
  }
}