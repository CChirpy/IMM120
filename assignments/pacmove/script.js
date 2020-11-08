/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

var pacSize, pacX, pacY, pacSpeed, pacRotationAngle, pacDirection;
var mouthAngleBottom, mouthAngleTop, mouthOpening;

function setup() 
{
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  //frameRate(10);

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

  // MOUTH OPENING AND CLOSING
  if (mouthOpening == true) 
  {
    mouthAngleBottom++;
    mouthAngleTop--;
    if (mouthAngleBottom >= 45) 
    {
      mouthOpening = false;
    }
  } 
  else 
  {
    mouthAngleBottom--;
    mouthAngleTop++;
    if (mouthAngleBottom <= 0)
    {
      mouthOpening = true;
    }
  }

  // MOVE, CHECK EDGES, AND CHECK ARROW KEYS
  if (pacDirection == 3) 
  {
    pacX = pacX + pacSpeed;
    pacRotationAngle = 0; 
    if (pacX > width) 
    {
      pacX = 0;
    }
  } 
  else if (pacDirection == 6) 
  {
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

  // RECORD KEYS PRESSED
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
  setOrigin(pacX, pacY);
  rotate(pacRotationAngle);
  arc(0, 0, pacSize, pacSize, mouthAngleBottom, mouthAngleTop, PIE);
  arc(width, 0, pacSize, pacSize, mouthAngleBottom, mouthAngleTop, PIE);
}

function setOrigin(x, y) 
{
  translate(x, y);
}