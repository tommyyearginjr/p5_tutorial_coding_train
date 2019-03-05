function setup() {
  createCanvas(600, 400);

  print('2.1: Variables in p5.js (mouseX, mouseY) - p5.js Tutorial');

  background('yellow');
}

function draw() {
  fill(255, 209, 204, 50);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

  // fill('white');
  // stroke(1);
  // rect(250, 200, 50, 75);
}