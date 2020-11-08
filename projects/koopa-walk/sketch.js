let floorImg, brickImg, greenKoopa1, redKoopa1, greenKoopa2, redKoopa2;
var floorBlock = [];
var brickBlock = [];
var greenKoopa;
var num;

function setup() {
  // only when game loads
  createCanvas(256, 224);
  num = 0;
  floorImg = loadImage('ground.png');
  brickImg = loadImage('brick.png');
  greenKoopa1 = loadImage('koopaTroopaGreen0.png');
  greenKoopa2 = loadImage('koopaTroopaGreen1.png');
  redKoopa1 = loadImage('koopaTroopaRed0.png');
  redKoopa2 = loadImage('koopaTroopaRed1.png');

  for (var i = 0; i < 16; i++) {
    floorBlock[i] = new MarioBlock(floorImg, num, 208);
    num += 16;
  }

  num = 64;

  for (var i = 0; i < 8; i++) {
    brickBlock[i] = new MarioBlock(brickImg, num, 128);
    num += 16;
  }

  greenKoopa = new Koopa(greenKoopa1, greenKoopa2, 16, (208 - 24));

}

function draw() {
  // this is a built-in forever loop
  background("#5D94FB");

  for (var i = 0; i < floorBlock.length; i++) {
    floorBlock[i].draw();
  }

  for (var i = 0; i < brickBlock.length; i++) {
    brickBlock[i].draw();
  }

  greenKoopa.draw();

  greenKoopa.moveGreen();
}