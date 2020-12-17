// "hand-coded" version

// create global variables up here
var foobar = 500;

function setup() // only when game loads
{
  createCanvas(windowWidth,windowHeight);
  noStroke();    // no outline on shapes
}

function draw()  // a built-in forever loop
{
  background(0);      // black background
  fill(255,0,0,0);    // red, no alpha value, completely transparent
  rect(10,10,60,10);  // rectangle positioned at (10,10). w=60, h=10
  fill(255,0,0,1);    // alpha value increments by 1
  rect(10,25,60,10);  // rectangle positioned at (10,25), y-value increments by 15
  fill(255,0,0,2)     // repeats...
  rect(10,40,60,10);
  fill(255,0,0,3);
  rect(10,55,60,10);
  fill(255,0,0,4);
  rect(10,70,60,10);
  fill(255,0,0,5);
  rect(10,85,60,10);
  fill(255,0,0,6);
  rect(10,100,60,10);
  fill(255,0,0,7);
  rect(10,115,60,10);
  fill(255,0,0,8);
  rect(10,130,60,10);
  fill(255,0,0,9);
  rect(10,145,60,10);
  fill(255,0,0,10);
  rect(10,160,60,10);
  fill(255,0,0,11);
  rect(10,175,60,10);
  fill(255,0,0,12);
  rect(10,190,60,10);
  fill(255,0,0,13);
  rect(10,205,60,10);
  fill(255,0,0,14);
  rect(10,220,60,10);
  fill(255,0,0,15);
  rect(10,235,60,10);
  fill(255,0,0,16);
  rect(10,250,60,10);
  fill(255,0,0,17);
  rect(10,265,60,10);
  fill(255,0,0,18);
  rect(10,280,60,10);
  fill(255,0,0,19);
  rect(10,295,60,10);
  fill(255,0,0,20);
  rect(10,310,60,10);
  fill(255,0,0,21);
  rect(10,325,60,10);
  fill(255,0,0,22);
  rect(10,340,60,10);
  fill(255,0,0,23);
  rect(10,355,60,10);
  fill(255,0,0,24);
  rect(10,370,60,10);
  fill(255,0,0,25);
  rect(10,385,60,10);
  fill(255,0,0,26);
  rect(10,400,60,10);
  fill(255,0,0,27);
  rect(10,415,60,10);
  fill(255,0,0,28);
  rect(10,430,60,10);
  fill(255,0,0,29);
  rect(10,445,60,10);
  fill(255,0,0,30);
  rect(10,460,60,10);
  fill(255,0,0,31);
  rect(10,475,60,10);
  fill(255,0,0,32);
  rect(10,490,60,10);
  fill(255,0,0,33);
  rect(10,505,60,10);
  fill(255,0,0,34);
  rect(10,520,60,10);
  fill(255,0,0,35);
  rect(10,535,60,10);
  fill(255,0,0,36);
  rect(10,550,60,10);
  fill(255,0,0,37);
  rect(10,565,60,10);
  fill(255,0,0,38);
  rect(10,580,60,10);
  fill(255,0,0,39);
  rect(10,595,60,10);
  fill(255,0,0,40);
  rect(10,610,60,10);
  fill(255,0,0,41);
  rect(10,625,60,10);
  fill(255,0,0,42);
  rect(10,640,60,10);
  fill(255,0,0,43);
  rect(10,655,60,10);
  fill(255,0,0,44);
  rect(10,670,60,10);
  fill(255,0,0,45);
  rect(10,685,60,10);
  fill(255,0,0,46);
  rect(10,700,60,10);
  fill(255,0,0,47);
  rect(10,715,60,10);
  fill(255,0,0,48);
  rect(10,730,60,10);
  fill(255,0,0,49);
  rect(10,745,60,10);
  fill(255,0,0,50);
  rect(10,760,60,10);
  fill(255,0,0,51);
  rect(10,775,60,10);
  fill(255,0,0,52);
  rect(10,790,60,10);
  fill(255,0,0,53);
  rect(10,805,60,10);
  fill(255,0,0,54);
  rect(10,820,60,10);
  fill(255,0,0,55);
  rect(10,835,60,10);
  fill(255,0,0,56);
  rect(10,850,60,10);
  fill(255,0,0,57);
  rect(10,865,60,10);
  fill(255,0,0,58);
  rect(10,880,60,10);
  fill(255,0,0,59);
  rect(10,895,60,10);
  fill(255,0,0,60);
  rect(10,910,60,10);
  fill(255,0,0,61);
  rect(10,925,60,10);
  fill(255,0,0,62);
  rect(10,940,60,10);
  fill(255,0,0,63);
  rect(10,955,60,10);

var a = 64;                             // make the alpha value into a variable and set it to 64
  for (var x = 80; x <= 220; x += 70)   // after each loop, add 70 to x-value till it hits 220
  {
    for (var y = 10; y <= 955; y += 15) // after each loop, add 15 to y-value till it hits 955
    {
      fill(255,0,0,a);
      rect(x,y,60,10);
      a+=1;                             // increment alpha value by 1 every loop
    }
  }
}
