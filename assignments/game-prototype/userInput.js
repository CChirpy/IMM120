// https://p5js.org/examples/dom-input-and-button.html
// https://p5js.org/reference/#/p5/keyCode

var enteredText, isEntered;

function textBox(x, y) {
  input = createInput();
  input.position(x, y);
  input.size(width - 4);
}

function enterButton() {
  enteredText = input.value();
  input.value('');
  console.log(enteredText);
}

function keyPressed() {
  if (keyCode === ENTER) {
    enterButton();
    isEntered = true;
  }
}

function commands() {
  if (isEntered == true) {
    if (enteredText == "/time" && gamestate == 1) // returns military time
    {
      getTime();
    }

    if (enteredText == "/name" && gamestate == 1) // returns pet's current name
    {
      console.log("Your pet's current name is " + name +
        "! If you would like to change it, type a new name after /name");
    } else if (enteredText.includes("/name") == true) // rename pet
    {
      name = enteredText.substring(6);
    }

    if (enteredText == "/feed") // feed/hunger
    {
      upHunger();
    }
    if (enteredText == "/play") // play/love
    {
      upLove();
    }
    if (enteredText == "/clean") // clean/cleanliness
    {
      clean();
    }

    if (enteredText == "/cat" && gamestate == 0) // cat
    {
      pet = new Pet(cat1, width / 2, height - 70, 50, meow);
      gamestate = 1;
    }
    if (enteredText == "/dog" && gamestate == 0) // dog
    {
      pet = new Pet(dog1, width / 2, height - 70, 50, bark);
      gamestate = 1;
    }

    if (enteredText.includes("/") != true && gamestate == 1 && runaway == false) // bark/meow if you talk to pet
    {
      pet.makeNoise();
    }

    if (gamestate == 1 && runaway == true) // endscreen
    {
      gamestate = 2;
    }

    if (gamestate == 2 && enteredText == "/credits") { // credits
      gamestate = 3;
    }

    if ((gamestate == 3 || gamestate == 2) && enteredText == "/restart") { // restart game
      gamestate = 0;
      setupTime(1);
      setName();
      setStats();
      runaway = false;
    }

    isEntered = false;
  }
}