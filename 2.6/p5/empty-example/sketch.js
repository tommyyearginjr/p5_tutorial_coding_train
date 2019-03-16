let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  // extraCanvas.background(255, 0, 0);
  extraCanvas.clear();
  background(0);
}

function draw() {
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);

  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 25, 25);
  }

  image(extraCanvas, 0, 0);

  fill(255, 0,0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);


  }










