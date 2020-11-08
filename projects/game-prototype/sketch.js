/*
  List of commands:
    /cat /dog
    /time /name
    /feed /play /clean
    /credits /restart
*/

var bark, meow, floof1, floof2, cat1, cat2;
var gamestate, pet;

function preload() {
  soundFormats('wav');
  bark = loadSound('assets/Bark.wav');
  meow = loadSound('assets/Meow.wav');
  dog1 = loadImage('assets/floof1.png');
  // dog2 = loadImage('assets/floof2.png');
  cat1 = loadImage('assets/cat1.png');
  // cat2 = loadImage('assets/cat2.png');
}

function setup() {
  createCanvas(320, 240);
  frameRate(6);
  textSize(16);
  textAlign(LEFT);
  textStyle(BOLD);
  textBox(0, height - 21); // (x, y)
  setupTime(1); // (spd)
  setupClock(270, 50, 50); // (x, y, size)
  setName();
  setStats();
  gamestate = 0;
}

function draw() {
  background("pink");
  commands();

  if (gamestate == 0) {
    startScreen();
  } else if (gamestate == 1) { // gameplay
    timeKeeping();
    createClock();
    displayDay(15, 50);
    isBirthday();
    displayStats(15, 15);
    isRunaway();

    if (runaway == false) // disappears if any stats reach 0, see gameplay.js
    {
      pet.display();
    }
  } else if (gamestate == 2) { // end screen
    endScreen();
  } else if (gamestate == 3) { // credits
    credits();
  }
}