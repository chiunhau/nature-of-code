var walker, dot;

function setup() {
  createCanvas(800, 600);
  noStroke();
  walker = new Walker();
  dot = new Dot();
}

function draw() {
  background(51);

  walker.update();
  walker.render();
  dot.update();
  dot.render();
}

function Walker() {
  this.pos = createVector(width / 2, 0);
  this.vel = createVector(0, 0);

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.render = function() {
    fill('#fff');
    ellipse(this.pos.x, this.pos.y, 50, 50);
  }
}

function Dot() {
  this.pos = createVector(mouseX, mouseY)
  this.update = function() {
    this.pos = createVector(mouseX, mouseY);
  }
  this.render = function() {
    fill('#f00');
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}