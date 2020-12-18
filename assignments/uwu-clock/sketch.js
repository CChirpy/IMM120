var s, m, h;                          // smh my head...uh, seconds, minutes, hours
var lineSpacing, lineSize, lineWidth; // spacing from edge, thickness, width
var ballX, ballSize;                  // position, size
var message, messages;                // custom random messages
var angle, speed;                     // text goes boing boing
var formattedMin, formattedHour;      // adds leading zeros, military time to regular time

// Setup canvas, settings, initialize variables
function setup() 
{
  createCanvas(windowWidth, windowHeight); // originally: 500, 250
  background(5, 2, 20);
  fill(226, 225, 235);
  noStroke();

  lineSpacing = width/8;
  lineSize = 5;
  ballSize = 15;
  night = true;

  textAlign(CENTER);
  textFont('monospace');
  message = "owo"; // initial message
  
  angle = 0;
  speed = 0.05; // bigger the value, faster the bounce, adds to 'angle' in draw()
}

function draw() 
{
  s = second();
  m = minute();
  h = hour();

  lineWidth = width - lineSpacing * 2; // width depends on canvas size and spacing
  ballX = map(s + m * 60 + h * 3600, 0, 86400, 0, lineWidth, true); // maps position in seconds

  // see touchStarted() function below
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
  rect(lineSpacing, height / 2, lineWidth, lineSize, lineSize);
  circle(ballX + lineSpacing, height / 2 + 2, ballSize);

  // bouncy message, used sine
  textSize(25);
  text(message, width / 2, height / 2 + 90 + sin(angle) * 3);
  angle += speed;
  
  // digital clock on top
  textSize(50);
  if (h % 12 === 0) // for 12 to show instead of 0 at 12pm
    formattedHour = 12;
  else 
    formattedHour = h % 12;
  formattedMin = ("0" + m).slice(-2); // taken from the web, to show 0 before single digit numbers
  text(formattedHour + ":" + formattedMin, width / 2, height / 2 - 60); // used modulus to avoid military time
}

// Switch messages when it switches from dark and light mode
function touchStarted()
{
  if (night === true) 
  {
    messages = ['uwu', 'the light blinds me', 'hisssss', 'i sleep']; // list of possible messages
    message = random(messages); // choose random message from the list
    night = false;
  } 
  
  else 
  {
    messages = ['owo', 'inspiration strikes at 2am', 'we have insomnia cookies', 'night time is my prime time', 'dark mode everything'];
    message = random(messages);
    night = true;
  }
  
  return false; // prevents different default behaviors in different browsers
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
