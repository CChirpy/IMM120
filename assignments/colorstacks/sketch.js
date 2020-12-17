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
