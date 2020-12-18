// unfinished: "happy dance" - alternate img1 and img2 quickly

class Pet 
{
  constructor(img1, x, y, s, sound)
  {
    this.img1 = img1;
    this.x = x;
    this.y = y;
    this.s = s;
    this.sound = sound;
  }
  
  display()
  {
    image(this.img1, this.x, this.y, this.s, this.s);
  }
  
  makeNoise()
  {
    this.sound.play();
  }
}