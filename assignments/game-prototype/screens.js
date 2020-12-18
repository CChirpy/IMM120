// images from Tatsumaki: https://tatsumaki.xyz/

function startScreen() {
  fill(0);
  noStroke();
  textAlign(CENTER);
  text("/cat or /dog", 160, 70);
  image(cat1, 70, 100, 70, 70);
  image(dog1, 190, 100, 70, 70);
}

function endScreen() {
  textSize(16);
  textAlign(LEFT);
  textStyle(BOLD);
  fill(0);
  noStroke();
  textAlign(CENTER);
  text("You went missing,", 160, 80);
  text("so " + name + " went away.", 160, 110);
  text("/credits", 160, 140);
  text("/restart", 160, 170);
}

function credits() {
  textSize(13);
  textAlign(LEFT);
  textStyle(BOLD);
  fill(0);
  noStroke();
  textAlign(CENTER);
  text("/restart", 160, 40);
  text("Made with p5.js", 160, 70);
  text("By Connie Huang", 160, 100);
  text("Sprites from Tatsumaki, a Discord bot", 160, 130);
  text("Sounds from Scratch's sound library", 160, 160);
  text("Special thanks to Professor Fishburn", 160, 190);
}