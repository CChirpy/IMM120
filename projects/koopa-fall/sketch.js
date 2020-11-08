var tileSize;    // adjustable stage
var stageWidth;
var stageHeight;
var arrStage;    //00000000000001 TILES
var arrKoopa;   //soontm
var tile;      // this object, below objects
var koopaGre;
var koopaRed;

function setup() 
{
  tileSize = 16;
  stageWidth = 24;
  stageHeight = 16;
  
  createCanvas(stageWidth * tileSize, stageHeight * tileSize);
  arrStage = new Array(stageWidth * stageHeight);
  tile = new Tile();
  
  // Creates a blank stage and a ground.
  var place = 0;
  for (y = 1; y <= stageHeight; y++)
  {
    for (x = 1; x <= stageWidth; x++)
    {
      arrStage[place] = 0;
      
      // Creates the ground of the stage.
      if (y == stageHeight)
      {
        arrStage[place] = 1;
      }
      
      place++;
    }
  }
  
  // Hole
  arrStage[arrStage.length - (stageWidth/2) + 1] = 0;
  arrStage[arrStage.length - (stageWidth/2)] = 0;
  arrStage[arrStage.length - (stageWidth/2) - 1] = 0;
  arrStage[arrStage.length - (stageWidth/2) - 2] = 0;

  // Places tiles based on the arrStage array.
  for (i = 0; i < arrStage.length; i++)
  {
    if (arrStage[i] == 1)
    {
      tile[i] = new Tile(imgGround, i % stageWidth * tileSize, int(i / stageWidth) * tileSize, tileSize);
    }
  }
  
  // print(arrStage); //TEST N VISUAL
  
  koopaGre = new Koopa(imgKoopaGreR1, imgKoopaGreR2, imgKoopaGreL1, imgKoopaGreL2, 
                       0, 0, 0, "Green", tileSize, tileSize * 2);
  koopaRed = new Koopa(imgKoopaRedR1, imgKoopaRedR2, imgKoopaRedL1, imgKoopaRedL2,     //SOON
                     0, 0, 0, "Red", tileSize, tileSize * 2);
}

function draw() //DISPLAY EVERYTHING
{
  background(0, 138, 197);
  for (i = 0; i < arrStage.length; i++)
  {
    if (arrStage[i] == 1)
    {
      tile[i].display();
    }
  }
  
  // koopaGre.display();
  // koopaGre.move();
  
  koopaRed.display();
  koopaRed.move();
}