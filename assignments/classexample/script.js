/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
var foobar = 500;
var bubble1, bubble2;

function setup()
{ 
  createCanvas(windowWidth,windowHeight);
  bubble1 = new Bubble(200, 300, "pink");
  bubble2 = new Bubble(100, 100, "grey");
}

function draw()
{ 
  background("white");
  bubble1.display();
  bubble2.display();
  bubble2.move();
 
}

class Bubble
{
  constructor(x, y, c)
  {
    this.x = x;
    this.y = y;
    this.c = c;
  }
  display()
  {
    fill(this.c);
    ellipse(this.x, this.y, 20);
  }
  move()
  {
    this.x++;
    if (this.x > width)
      {
        this.x = 0;
      }
  }
}