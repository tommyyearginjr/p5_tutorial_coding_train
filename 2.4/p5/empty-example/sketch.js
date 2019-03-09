var col = 0;

function setup() {
  createCanvas(600, 400);
  print('2.4: The map() Function - p5.js Tutorial');
}

function draw() {
  col = map(mouseX, 0, 600, 0, 255);
  background(col);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
  noStroke();
  fill('black');
  text('2.4: The map() Function - p5.js Tutorial', 100, 300);
}