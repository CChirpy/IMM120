// https://gist.github.com/endel/321925f6cafa25bbfbde (for zero padding)

var time, preTime, clockSpd;
var ingameTime, timePast, mins, hours, days;

// reset time
function setupTime(spd) {
  // Time tracking variables.
  time = minute(); // change to second() for observation
  preTime = time;
  timePast = 0; // tracks irl time in minutes
  ingameTime = 0;
  clockSpd = spd; // 1 = fast, 2 = normal, 3 = realtime

  // Ingame time variables.
  mins = 0;
  hours = 0;
  days = 0;
}

// create ingame time, tracks irl time in minutes
function timeKeeping() {
  time = minute();

  if (time != preTime) {
    // Tracks Time.
    if (clockSpd == 1) {
      ingameTime += 144;
    } // 1 ingame day = 10 mins irl   
    else if (clockSpd == 2) {
      ingameTime += 4;
    } // 1 ingame day = 6 hours irl
    else if (clockSpd == 3) {
      ingameTime += 1;
    } // 1 ingame day = 1 day irl
    timePast += 1;
    // console.log("ingameTime: " + ingameTime);
    // console.log(timePast + " minutes has passed irl");

    // Ingame days, hours, and mins.
    days = int(ingameTime / 1440);
    hours = int(ingameTime / 60) - (days * 24);
    mins = ingameTime - (days * 1440) - (hours * 60);

    // stats go down over time, go to gameplay.js
    statsDown();
  }

  preTime = time;
}

// Zero padding for the getTime() function.
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

// Shows military time in the console: /time
function getTime() {
  console.log(hours.pad() + ":" + mins.pad());
}