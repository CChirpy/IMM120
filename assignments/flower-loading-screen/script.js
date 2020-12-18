/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

var foobar = 500;
function setup()   // setup
{ 
  createCanvas(640,480);
  noStroke();
  textFont('Courier New');
  textStyle(BOLD);
  textSize(14);
}

var a = 255;       // alpha values
var o = 64;        // offset for alpha values
var m = 255;       // max alpha value
var x = 290;
var y = 210;       // adjustable placement centered at (290, 210)

function draw()    // built-in forever loop
{ 
  background(255,114,89);
  
  a += 8;                                  // (a) increases over time
  if (a > m)                               // (a) resets to 0 when it goes over the max (m)
  {
    a = 0;
  }
  
  fill(255, 91, 77, m - a);                // (a) decreases alpha over time since the max (m) is subtracting from it
  rect(x, y, 30, 30, 10);                  // top left square
  
  fill(255, 91, 77, m - ((a + o) % m));    // (o) offsets, modulus (%) prevents alpha from going into the negatives
  rect(x + 32, y, 30, 30, 10);             // top right square
  
  fill(255, 91, 77, m - ((a + (2 * o)) % m));    
  rect(x + 32, y + 32, 30, 30, 10);        // bottom right square
 
  fill(255, 91, 77, m - ((a + (3 * o)) % m));    
  rect(x, y + 32, 30, 30, 10);             // bottom left square 
  
  // DECORATIONS
  fill(255, 172, 117, 200);
  ellipse(x + 25, y + 25, 6);              // bigger circle
  ellipse(x + 31, y + 31, 4);              // smaller circle
  text('please', 220, 244);
  text('wait...', 371, 244);
}