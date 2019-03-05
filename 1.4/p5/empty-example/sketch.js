function setup() {
  createCanvas(400, 300);
}

function draw() {
  // background(R, G, B) --> RGB color
  // background(102, 178, 255);
  // background(220, 0, 0);
  // background(0, 0, 0);
  // background(255, 25, 255);
  // background('cyan');
  background('teal');
  stroke('white');
  line(0, 0, 400, 300);
  rectMode(CENTER);
  fill('red');
  stroke('yellow');
  rect(200, 150, 150, 150);
  noStroke();
  fill('black');
  text('1.4', 25, 275);
}