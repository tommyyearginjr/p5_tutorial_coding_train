// var circX;
var circX = 150;
function setup() {
  createCanvas(600, 400);
  print('2.2');
  // circX = 50; 
}

function draw() {
  background('yellow');
  fill(255, 209, 204);
  stroke('black');
  ellipse(circX, 20, 20);
  circX += 5;
  noStroke();
  fill('black');
  text('2.2', 100, 300);
}