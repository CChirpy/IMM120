/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
var foobar = 500;


function setup() 
{
	createCanvas(500, 500);
}

function draw() 
{
	background("BurlyWood");
	fill("Silver");
	drawBat(50, 50, "Black", "Black", "Black");
	drawBat(150, 150, "Navy", "Pink", "White");
	drawBat(250, 250, "Maroon", "gray", "Tomato");
}

function drawBat(xLoc, yLoc, colorPupil, colorNose, colorTooth) 
{
	push();
	translate(xLoc - 250, yLoc - 250);
	// This function should draw the entire bat relative to the xLoc and yLoc parameters that are passed into the function.
	ellipse(250, 250, 200); //Main body
	ellipse(200, 225, 25, 50); //Left Eye
  fill(colorPupil);
	ellipse(200, 230, 10, 15); //Left Pupil
  fill("Silver"); //prevent flood
	ellipse(300, 216, 25, 50); //Right Eye
  fill(colorPupil);
	ellipse(300, 221, 10, 15); //Right Pupil
  fill("Silver"); //prevent flood
  
	// Nose
  fill(colorNose);
	ellipse(250, 285, 50, 30);
  fill("Silver"); //prevent flood

	//Left Nostril
	arc(235, 275, 20, 20, -PI / 4 + PI / 8, 3 * PI / 4 + PI / 16, OPEN);
	arc(265, 275, 20, 20, PI / 4 - PI - 16, 5 * PI / 4 - PI / 8, OPEN);

	// Mouth and tongue
	arc(250, 350, 100, 40, 5 * PI / 4, 7 * PI / 4, OPEN);
	noStroke();
	fill(colorTooth);
	triangle(242, 330, 258, 330, 250, 345);
	stroke(0);
	fill("silver"); 

	// Left Ear
	beginShape();
	vertex(179, 179);
	bezierVertex(172, 172, 100, 171, 86, 184);
	bezierVertex(111, 199, 109, 195, 109, 195);
	bezierVertex(133, 199, 109, 195, 154, 224);
	endShape();

	// Right Ear
	beginShape();
	vertex(295, 161);
	bezierVertex(297, 148, 328, 101, 341, 101);
	bezierVertex(342, 100, 348, 106, 348, 106);
	bezierVertex(348, 106, 339, 106, 339, 106);
	bezierVertex(342, 119, 326, 186, 326, 186);
	endShape();
	pop();
}