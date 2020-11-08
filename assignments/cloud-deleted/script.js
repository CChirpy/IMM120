/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
var foobar = 500;
var c1, c2, c3, c4, c5;

function setup() 
{
  createCanvas(400, 400);
  noStroke();
  c1 = new Cloud(width / 2, height / 2, 10, "grey", 2, 100);
  c2 = new Cloud(width / 4, height / 4, 10, "aliceblue", 10, 100);
  c3 = new Cloud(width / 2 - width / 8, height / 2 - height / 8, 10, "azure", 5, 100);
  c4 = new Cloud(width - width / 4, height - height / 4, 10, "rebeccapurple", 15, 100);
  c5 = new Cloud(width / 2 + width / 8, height / 2 + height / 8, 10, "lightsteelblue", 7, 100);
}

function draw() 
{
  background(200);
  c1.move();
  c2.move();
  c3.move();
  c4.move();
  c5.move();

  c1.draw();
  c2.draw();
  c3.draw();
  c4.draw();
  c5.draw();
}