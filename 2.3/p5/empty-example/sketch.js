// var circX = 50;
var myCircle = {
  x: 0,
  y: 100,
  diameter: 90
};
function setup() {
  createCanvas(600, 400);
  print('2.3: JavaScript Objects');
}

function draw() {
  background('yellow');
  fill(255, 209, 204);
  stroke('black');
  ellipse(myCircle.x, myCircle.y, myCircle.diameter);
  myCircle.x += .5;
  noStroke();
  fill('black');
  text('2.3: JavaScript Objects', 100, 300);
}