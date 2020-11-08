var pacSize, pacX, pacY, pacSpeed, pacRotationAngle, pacDirection;
var mouthAngleBottom, mouthAngleTop, mouthOpening;

function setup() 
{
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  //frameRate(10);

  // Initialize (i.e. Give initial values to) all of my global variables
  pacSize = width / 8;
  mouthAngleBottom = 0;
  mouthAngleTop = 359;
  mouthOpening = false;
  pacX = width / 2;
  pacY = height / 2;
  pacSpeed = 5;
  pacRotationAngle = 0;
  pacDirection = 3; // 3 = right, 6 = down, 9 = left, 12 = up
}

function draw() 
{
  background(220);

  // Is the mouth opening or closing?
  if (mouthOpening == true) 
  {
    // If the mouth is opening, I want the bottom angle (arc START) 
    // to increase, and the top angle (arc STOP) to decrease
    mouthAngleBottom++;
    mouthAngleTop--;
    if (mouthAngleBottom >= 45) // Mouth is fully open.
    // mouthAngleTop separately because I know that the bottom
    // and top are changing at the same rate
    {
      mouthOpening = false;
    }
  } 
  else 
  {
    // If the mouth is opening, I want the bottom angle to decrease,
    // and the top angle to increase
    mouthAngleBottom--;
    mouthAngleTop++;
    if (mouthAngleBottom <= 0) // Mouth is fully closed
    {
      mouthOpening = true;
    }
  }

  // MOVE, CHECK EDGES, AND CHECK ARROW KEYS
  if (pacDirection == 3) 
  {
    // If I'm moving to the right (remember, 3 means "3 o'clock", or RIGHT), but only because
    // I'm telling p5.js to increase the pacX variable here, which makes Pac move right
    pacX = pacX + pacSpeed;
    pacRotationAngle = 0; // Used later in the rotate function to face Pac to the right
    if (pacX > width) 
    {
      pacX = 0;
    }
  } 
  else if (pacDirection == 6) 
  {
    // If I'm moving downwards (remember, 6 means "6 o'clock", or DOWN), but only because
    // I'm telling p5.js to increase the pacY variable here, which makes Pac move down
    pacY = pacY + pacSpeed;
    pacRotationAngle = 90;
    if (pacY > height) 
    {
      pacY = 0;
    }
  } 
  else if (pacDirection == 9) 
  {
    pacX = pacX - pacSpeed;
    pacRotationAngle = 180;
    if (pacX < 0) 
    {
      pacX = width;
    }
  } 
  else if (pacDirection == 12) 
  {
    pacY = pacY - pacSpeed;
    pacRotationAngle = 270;
    if (pacY < 0) 
    {
      pacY = height;
    }
  }

  // Change the direction to the appropriate value based on which key is pressed
  if (keyIsPressed) 
  {
    if (keyCode == RIGHT_ARROW) 
    {
      pacDirection = 3;
    } 
    else if (keyCode == DOWN_ARROW) 
    {
      pacDirection = 6;
    } 
    else if (keyCode == LEFT_ARROW) 
    {
      pacDirection = 9;
    } 
    else if (keyCode == UP_ARROW) 
    {
      pacDirection = 12;
    }
  }

  // DRAW PAC
  // Translate and rotate Pac
  setOrigin(pacX, pacY); // setOrigin is my custom function that just calls translate
  // we made it in class on 2019-03-01 because it's name is more
  // descriptive of what the translate function actually does
  rotate(pacRotationAngle);
  arc(0, 0, pacSize, pacSize, mouthAngleBottom, mouthAngleTop, PIE);
  arc(width, 0, pacSize, pacSize, mouthAngleBottom, mouthAngleTop, PIE);
}

function setOrigin(x, y) 
{
  translate(x, y);
}