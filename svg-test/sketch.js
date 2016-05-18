var circles = [];

function setup() {
  createCanvas(800, 600, SVG);
  noStroke();
  for(var i = 0; i < 100; i ++) {
    circles.push(new Circle(randomGaussian(0, width), randomGaussian(0, height)));
  }
  for(var i = 0; i < 100; i ++) {
    circles[i].render();
  }
  noLoop();
  // save();
}

// function draw() {
  
// }

function Circle(x, y) {
  this.pos = createVector(x, y);
  this.fill = '#f00';
  this.render = function() {
    fill(this.fill);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}