class Tile
{
  constructor(img, x, y, s)
  {
    this.img = img;
    this.x = x;
    this.y = y;
    this.s = s;
  }
  
  display()
  {
    image(this.img, this.x, this.y, this.s, this.s);
  }
}

class Koopa
{
  constructor(img, x, y, c, s)
  {
    this.img = img;
    this.x = x;
    this.y = y;
    this.c = c;
    this.s = s;
  }
  
  display()
  {
    image(this.img, this.x, this.y, this.c, this.s);
  }
  
  move()
  {
    
  }
}