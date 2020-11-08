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
  constructor(imgR1, imgR2, imgL1, imgL2, iniX, iniY, direction, c, w, h)
  {
    this.imgR1 = imgR1;
    this.imgR2 = imgR2;
    this.imgL1 = imgL1;
    this.imgL2 = imgL2;
    this.c = c;                    // color
    this.w = w;                    // width
    this.h = h;                    // height
    this.iniX = iniX;              // initial X
    this.iniY = iniY;              // initial Y
    this.direction = direction;    // int(random(2));
    
    this.x = this.iniX;
    this.y = this.iniY;
    this.spd = 1;                  // move left n right
    this.isFalling = true;
    this.fallspd = 4;
    this.grav = 0.4;               // gravity
    this.variant = 0;              // 0 or 1
    this.counter = 0;
    this.frames = 8;
  }
  
  display()
  {    
    if (this.variant == 0)
    {
      if (this.direction == 0)  // right
        image(this.imgR1, this.x, this.y, this.w, this.h);
         
      if (this.direction == 1)  // left
        image(this.imgL1, this.x, this.y, this.w, this.h);
      
      if (this.counter > this.frames)
      {
        this.variant = 1;
        this.counter = 0;
      }
    }
    
    else if (this.variant == 1)  // animation
    {
      if (this.direction == 0)
        image(this.imgR2, this.x, this.y, this.w, this.h);
         
      if (this.direction == 1)
        image(this.imgL2, this.x, this.y, this.w, this.h);
      
      if (this.counter > this.frames)
      {
        this.variant = 0;
        this.counter = 0;
      }
    }
    
    this.counter++;
  }
  
  move()
  {
    // Detect block
    for (i = 0; i < arrStage.length; i++)
    {
      if (arrStage[i] >= 1)
      {
        if (this.x >= i % stageWidth * tileSize && this.x <= i % stageWidth * tileSize + tileSize)
        {
          if (this.y >= int(i / stageWidth) * tileSize - (tileSize*2))
          {
            this.isFalling = false;
          }
        }  
      }
      else if (arrStage[i] <= 0)
      {
        if (this.x >= i % stageWidth * tileSize && this.x <= i % stageWidth * tileSize + tileSize)
        {
          if (this.y >= int(i / stageWidth) * tileSize - (tileSize*2))
          {
            this.isFalling = true;
          }
        }  
      }
    }
    
    // Bounce on edge
    if (this.x > width || this.x < 0)
    {
      this.spd *= -1;
      if (this.direction == 0)
        this.direction = 1;
      else if (this.direction == 1)
        this.direction = 0;
    }
    
    // Move left or right
    if (this.direction == 0)
      this.spd = 1;
    if (this.direction == 1)
      this.spd = -1;
    this.x += this.spd;    
    
    // Fall
    if (this.isFalling == true)
    {
      this.y = this.y + this.fallspd;          // gravity
      this.fallspd = this.fallspd + this.grav;
    }
    
    // Land
    if (this.isFalling == false)
    {
      this.y -= (this.y % tileSize);           // de-sink koopa
      this.fallspd = 0;
    }
    
    // Delete when out of screen
//     if (this.c == "Green")
//     {
//       if (this.x > width || this.x < 0 || this.y > height || this.y < 0)
//       {
            // delete this
//       }
//     }
  }
}