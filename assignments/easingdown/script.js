/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
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
