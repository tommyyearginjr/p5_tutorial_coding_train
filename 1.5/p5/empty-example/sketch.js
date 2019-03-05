function setup() {
  createCanvas(400, 300);
  print('hello');
}

function draw() {
  background('teal');

  strokeWeight(7);
  stroke('blue');
  ellipse(30,30,25,25);

  strokeWeight(1);
  stroke('white');
  line(0, 0, 400, 300);

  rectMode(CENTER);
  fill('red');
  strokeWeight(4);
  stroke('yellow');
  rect(200, 150, 150, 150);

  noStroke();
  fill('black');
  text('1.5', 25, 275);
}