/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

let foobar = 500; // global variable

function setup() { 
  createCanvas(720, 480);     // (w, h) halfpoint at x=360
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(204);            // grey background
  
  // neck
  stroke(102);                // gray stroke
  line(266, 257, 266, 162);   // left, (x1, y1, x2, y2)
  line(276, 257, 276, 162);   // middle 
  line(286, 257, 286, 162);   // right

  // antennae
  line(276, 155, 246, 112);   // small
  line(276, 155, 306, 56);    // tall
  line(276, 155, 342, 170);   // medium
  
  // body
  noStroke();                 // disable stroke
  fill(102);                  // set fill to gray
  ellipse(264, 377, 33, 33);  // circle, (x, y, w, h)
  fill(0);                    
  rect(219, 257, 90, 120);    // rectangle, (x, y, w, h)
  fill(102);
  rect(219, 274, 90, 6);      // gray rectangular stripe
  
  // head
  fill(0);
  ellipse(276, 155, 45, 45);  // large black circle head thing
  fill(255);
  ellipse(288, 150, 14, 14);  // white eye
  fill(0);
  ellipse(288, 150, 3, 3);    // small pupil
  fill(153);
  ellipse(263, 148, 5, 5);    // left gray dot
  ellipse(296, 130, 4, 4);    // top dot
  ellipse(305, 162, 3, 3);    // small gray dot
  
  // Mirror ----------------- (360-x)+360...720-x
  
  // neck mirror
  stroke(102); 
  line(454, 257, 454, 162);
  line(444, 257, 444, 162);
  line(434, 257, 434, 162);
  
  // antennae mirror
  line(444, 155, 474, 112);
  line(444, 155, 414, 56);
  line(444, 155, 378, 170);
  
  //body mirror
  noStroke();
  fill(102);
  ellipse(456, 377, 33, 33); 
  fill(0);
  rect(411, 257, 90, 120);    // (360 - (Rect x + rect width)) + 360
  fill(102);
  rect(411, 274, 90, 6);
  
  // head mirror
  fill(0);
  ellipse(444, 155, 45, 45);
  fill(255);
  ellipse(432, 150, 14, 14);
  fill(0);
  ellipse(432, 150, 3, 3);
  fill(153);
  ellipse(457, 148, 5, 5);
  ellipse(424, 130, 4, 4);
  ellipse(415, 162, 3, 3);
}