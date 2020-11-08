/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
// for p5.js compatibility

// several brackets missing 
// several semicolons missing
// removed +1, added a--;
// start (a) at 255

var w = 50;
var h = 5;
var a;

function setup()
{
  createCanvas(1024,1000);
  strokeWeight(0);
}
function draw ()
{
  background(255);
  
  a=255;
  for(var x=10; x< 640 ;x +=10)
  {
    fill(255,150,0,a);
    rect(10,x+10,w,h);
    a--;
  }
  
  a=192;
  for(var x=10; x< 640 ;x +=10) 
  {
    fill(255,150,0,a);
    rect(80,x+10,w,h);
    a--;
  } 

  a=129;
  for(var x=10; x< 640 ;x +=10)
  {
    fill(255,150,0,a);
    rect(150,x+10,w,h);
    a--;
  }
  
  a=64;
  for(var x=10; x< 640 ;x +=10)
  {
    fill(255,150,0,a);
    rect(220,x+10,w,h);
    a--;
  }
}