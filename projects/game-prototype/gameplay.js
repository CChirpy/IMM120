var name, nameList, birthday;
var hunger, love, cleanliness, goodMsgList;
var runaway;

// default names
function setName(ogName) {
  nameList = ["Rockie", "Coco", "Buddy", "Daisy"];
  name = random(nameList);
}

// birthday every 30 days
function isBirthday() {
  if (days != 0 && days % 30 == 0) {
    birthday = true;
  } else {
    birthday = false;
  }
}

// Displays "Day: #", start message, and birthday message
function displayDay(x, y) {
  textSize(16);
  textAlign(LEFT);
  textStyle(BOLD);
  text("Day: " + days, x, y);

  // Welcome message disappears after 1 minute irl
  if (timePast == 0) {
    text("Say hello to " + name + "!", x, y + 25);
  }

  // Displays birthday message every 30 days
  if (birthday == true) {
    text("Happy birthday " + name + "!", x, y + 25);
  }
}

// stats maxed (6), also sets a message list for /feed, /play, and /clean
function setStats() {
  hunger = 6;
  love = 6;
  cleanliness = 6;
  goodMsgList = [" is overjoyed!", " looks happy.", " wants more!", " likes your attention.", " looks sleepy."];
  runaway = false;
}

// Stats go down over time, go to time.js
function statsDown() {
  if (ingameTime != 0 && ingameTime % 144 == 0) {
    if (hunger > 0) {
      hunger -= 1;
    }
    if (love > 0) {
      love -= 1;
    }
    if (cleanliness > 0) {
      cleanliness -= 1;
    }
  }
}

// Feed
function upHunger() {
  if (cleanliness <= 1) {
    console.log(name + " really needs a bath!");
  } else if (hunger < 6) {
    hunger = 6;
    cleanliness -= 1;

    if (love < 6) {
      love += 1;
    } else {
      console.log(name + random(goodMsgList));
    }
  } else {
    console.log(name + " is full!");
  }
}

// Play
function upLove() {
  if (hunger <= 1) {
    console.log("It looks like " + name + " wants to eat.");
  } else if (love < 6) {
    love += 1;
    hunger -= 1;
  } else {
    console.log(name + random(goodMsgList));
    hunger -= 1;
  }
}

// Clean
function clean() {
  if (cleanliness >= 6) {
    console.log(name + " doesn't want to take a bath.");
  } else {
    cleanliness = 6;
    console.log(name + " is now squeaky clean!");
  }
}

// displays stats with bars on top
function displayStats(x, y) {
  noStroke();

  fill('#7d6c60');
  rect(x, y, 8 * hunger, 5);

  fill('#ff757c');
  rect(x + 58, y, 8 * love, 5);

  fill('#cff3ff');
  rect(x + 116, y, 8 * cleanliness, 5);
}

// ends game when any stat reaches 0
function isRunaway() {
  if (hunger <= 0 || love <= 0 || cleanliness <= 0) {
    runaway = true;
  }
}