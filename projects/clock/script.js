/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
var foobar = 500;

// inspiration strikes at 2am
// we have cookies

// the light blinds me
// hisssss

var s, m, h;                       // seconds, minutes, hours
var lineSpacing, lineSize, lineW;  // spacing from edge, thickness, width
var ballX, ballSize;               // position, size
var message, messages;             // custom random messages
var formattedMin;
var formattedHour;

function setup() // setup canvas, settings, initialize variables
{
  createCanvas(500, 250);
  background(5, 2, 20);
  fill(226, 225, 235);
  noStroke();
  
  lineSpacing = 40;
  lineSize = 5;
  ballSize = 10;
  night = true;   
  
  textAlign(CENTER);
  textFont('monospace'); 
  message = "owo";  // initial message
  angle = 0;
  speed = .05;      // bigger the value, faster the bounce
}

function draw()
{
  s = second();
  m = minute();
  h = hour();
  
  lineW = width - lineSpacing*2;   // width depends on canvas size and spacing
  ballX = map(s+m*60+h*3600, 0, 86400, 0, lineW, true);  // maps position in seconds
  
  // the mouseClicked function changes the value of night down below
  if (night === true)
    {
      background(5, 2, 20);
      fill(226, 225, 235);
    }
  else
    {
      background(227, 225, 213);
      fill(53, 56, 69);
    }
  
  // line and ball
  rect(lineSpacing, height/2, lineW, lineSize, lineSize);
  circle(ballX+lineSpacing, height/2+2, ballSize);
  
  // bouncy message, used sine
  textSize(15);
  text(message, width/2, height/2+75 + sin(angle)*3);
  angle += speed;
  
  // digital clock on top
  textSize(35);
  if (h%12 === 0)      // for 12 to show instead of 0 at 12pm
    {
      formattedHour = 12;
    }
  else
    {
      formattedHour = h%12;
    }
  formattedMin = ("0" + m).slice(-2);  // taken from the web, to show 0 before single digit numbers
  text(formattedHour + ":" + formattedMin, width/2, height/2-60); // used modulus to avoid military time
}

function mouseClicked() 
{
  // switch messages when it switches from dark and light mode
  if (night === true) 
    {
      messages = ['uwu', 'the light blinds me', 'hisssss', 'i sleep'];  // list of possible messages
      message = random(messages);  // choose random message from the list
      night = false;
    }
  else   
    {
      messages = ['owo', 'inspiration strikes at 2am', 'we have insomnia cookies', 'night time is my prime time', 'dark mode everything'];
      message = random(messages);
      night = true;
    }
}