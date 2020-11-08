// https://p5js.org/examples/input-clock.html

let cx, cy;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setupClock(x, y, size) 
{
  stroke(255);

  let radius = min(size, size) / 2;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = x;
  cy = y;
}

function createClock() 
{
  // Draw the clock background
  noStroke();
  fill(244, 122, 158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles
  let m = map(mins, 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hours + norm(mins, 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  endShape();
}