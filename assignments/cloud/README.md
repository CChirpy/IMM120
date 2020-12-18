# Unit 2 Lab 1: Make Pac Move

[**Web Preview**](https://cchirpy.github.io/IMM120/assignments/cloud/)

## Learning Objectives
- Gain experience translating existing code into a class
- Learn key differences between functions and classes
- Gain experience testing changes to code to verify that they achieve the desired outcomes

## Resources
Starter code and class examples:
```javascript
var c1, c2, c3, c4, c5;

function setup() {
  createCanvas(400, 400);
  c1 = new Cloud(width / 2, height / 2, 10, "grey", 2, 100);
  c2 = new Cloud(width / 4, height / 4, 10, "aliceblue", 10, 100);
  c3 = new Cloud(width / 2 - width / 8, height / 2 - height / 8, 10, "azure", 5, 100);
  c4 = new Cloud(width - width / 4, height - height / 4, 10, "rebeccapurple", 15, 100);
  c5 = new Cloud(width / 2 + width / 8, height / 2 + height / 8, 10, "lightsteelblue", 7, 100);
}

function draw() {
  background(200);
  c1.move();
  c2.move();
  c3.move();
  c4.move();
  c5.move();

  c1.draw();
  c2.draw();
  c3.draw();
  c4.draw();
  c5.draw();
}
```
- [Eyes and Other Functions](https://editor.p5js.org/fishburj@tcnj.edu/sketches/XZ1wyPbLi)
- [Bubbles as Function](https://editor.p5js.org/fishburj@tcnj.edu/sketches/PtDhjkNeC)
- [Bubbles as Class](https://editor.p5js.org/fishburj@tcnj.edu/sketches/LWuwDFmRS)
- [Bubbles as Class in Array](https://editor.p5js.org/fishburj@tcnj.edu/sketches/kD8-7or3R)
