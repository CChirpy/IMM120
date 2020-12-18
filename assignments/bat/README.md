# Unit 3 Lab 1: Add Parameters to Existing Function

[**Web Preview**](https://cchirpy.github.io/IMM120/assignments/bat/)

## Learning Objectives
- Gain experience refactoring existing code into a custom function
- Gain experience testing changes to code to verify that they achieve the desired outcomes
- Gain experience working with colors as parameters

## Resources
Starter code:
```javascript
function setup() {
	createCanvas(500, 500);
}

function draw() {
	background("BurlyWood");
	fill("Silver")
	drawBat(50, 50);
	drawBat(150, 150);
	drawBat(250, 250);
}

function drawBat(xLoc, yLoc) {
	push();
	translate(xLoc - 250, yLoc - 250);
	// This function should draw the entire bat relative to the xLoc and yLoc parameters that are passed into the function.
	ellipse(250, 250, 200); //Main body
	ellipse(200, 225, 25, 50); //Left Eye
	ellipse(200, 230, 10, 15); //Left Pupil
	ellipse(300, 216, 25, 50); //Right Eye
	ellipse(300, 221, 10, 15); //Right Pupil
	// Nose
	ellipse(250, 285, 50, 30);

	//Left Nostril
	arc(235, 275, 20, 20, -PI / 4 + PI / 8, 3 * PI / 4 + PI / 16, OPEN);
	arc(265, 275, 20, 20, PI / 4 - PI - 16, 5 * PI / 4 - PI / 8, OPEN);

	// Mouth and tongue
	arc(250, 350, 100, 40, 5 * PI / 4, 7 * PI / 4, OPEN);
	noStroke();
	fill("Pink");
	triangle(242, 330, 258, 330, 250, 345);
	stroke(0);
	fill("silver");

	// Left Ear
	beginShape();
	vertex(179, 179);
	bezierVertex(172, 172, 100, 171, 86, 184);
	bezierVertex(111, 199, 109, 195, 109, 195);
	bezierVertex(133, 199, 109, 195, 154, 224);
	endShape();

	// Right Ear
	beginShape();
	vertex(295, 161);
	bezierVertex(297, 148, 328, 101, 341, 101);
	bezierVertex(342, 100, 348, 106, 348, 106);
	bezierVertex(348, 106, 339, 106, 339, 106);
	bezierVertex(342, 119, 326, 186, 326, 186);
	endShape();
	pop();
}
```
