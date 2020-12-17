var foobar = 500;

// Global Variables
var x, y;                    // xy coordinates
var w;                       // width
var e;                       // ease

function setup()
{
  createCanvas(500, 500);
  noStroke();
  fill("white");

  // Initialize Variables
  x = width / 2;             // starting x position
  y = height / 2;            // starting y position
  w = 25;                    // width size of the circle
  e = 0.08;                   // easing value
}

function draw()
{
  background(50);

  // Draw circle
  ellipse(x, y, w);

  // Save cursor position & constrain, ease down
  if (mouseIsPressed)
  {
    x = constrain(mouseX, w/2,  width - w/2);
    y = constrain(mouseY, w/2,  height - w/2);
  }
  else
    {
      y = y + ((height - w/2 - y) * e);
    }
}
