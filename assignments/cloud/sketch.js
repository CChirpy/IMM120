var c1, c2, c3, c4, c5;
var offset;

function setup() 
{
  createCanvas(400, 400);
  noStroke();
  
  //random offset, changes with every run
  offset = random(5, 15);
  
  //create objects
  c1 = new Cloud(width / 2, height / 2, 30, "grey", 2, 100, offset);
  c2 = new Cloud(width / 4, height / 4, 50, "cyan", 10, 100, offset);
  c3 = new Cloud(width / 2 - width / 8, height / 2 - height / 40, 70, "red", 5, 100, offset);
  c4 = new Cloud(width - width / 4, height - height / 4, 50, "yellow", 15, 100, offset);
  c5 = new Cloud(width / 2 + width / 8, height / 2 + height / 8, 90, "purple", 7, 100, offset);
}

function draw() 
{
  background(200);
  
  //draw objects based on color, size, and position
  c1.draw();
  c2.draw();
  c3.draw();
  c4.draw();
  c5.draw();
  
  //move objects to the right based on speed
  c1.move();
  c2.move();
  c3.move();
  c4.move();
  c5.move();
}