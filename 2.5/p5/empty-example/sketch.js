var spot = {
  x: 50,
  y: 50,
}

var col = {
  r: 255,
  g: 0,
  b: 0,
}

function setup() {
  createCanvas(600, 400);
  background('white');

  print('2.5: The random() Function');
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(80, 240);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 25, 25);

  noStroke();
  fill('black');
  text('2.5: The random() Function', 100, 300);
}