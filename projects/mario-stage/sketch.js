var imgBrick;  // Image of a brick. Initialized in the preload function.
var tile;      // A tile. Holds image, coordinates, and size. 
var arrStage;  // Stage placeholder comprised of 0's and 1's. 
var stageSize; // Stage size defaulted at 16 in the setup.

function preload() 
{
  imgBrick = loadImage('images/brick.png');
  imgGround = loadImage('images/ground.png');
}

function setup() 
{
  stageSize = 16;                                // Sets the stage size. Tile size scales with stage size.
  createCanvas(stageSize * stageSize,            // stageSize is ^2 due to tile size.
               stageSize * stageSize);
  background(0, 138, 197);
  
  tile = new Tile();                             // Initialize tile.
  arrStage = new Array(stageSize * stageSize);   // Initialize stage.
  
  // Creates a blank stage and a ground.
  var place = 0;                                 // Sets values in array.
  for (y = 1; y <= stageSize; y++)               // Run print(arrStage) for visualization.
  {
    for (x = 1; x <= stageSize; x++)
    {
      arrStage[place] = 0;
      
      // Creates the ground of the stage.
      if (y == stageSize)
      {
        arrStage[place] = 1;
      }
      
      place++;
    }
  }
  
  // Hole
  arrStage[arrStage.length - (stageSize/2)] = 0;
  arrStage[arrStage.length - (stageSize/2) - 1] = 0;
  arrStage[arrStage.length - (stageSize/2) - 2] = 0;
  
  // Creates and places tiles based on the arrStage array and displays it.
  for (i = 0; i < arrStage.length; i++)
  {
    if (arrStage[i] == 1)
    {
      tile[i] = 
        new Tile(imgBrick, 
                 i % stageSize * stageSize, 
                 int(i / stageSize) * stageSize, 
                 stageSize);
      tile[i].display();
    }
  }
  
  
  /* 
    Everything below is just a bunch of tests.
  */
  
  // tile = new Tile(imgBrick, 0, 0);
  // print(place);
  // print(arrStage.length);
  // print(arrStage);
}

function draw() 
{
  // tile.display();
}