var foobar = 500;

var img;

function preload()
{
  img = loadImage('brick.png');
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
  image(img, 0, 0);
  img.resize(50, 100);
}

function draw()
{
  //background("skyblue");

}
