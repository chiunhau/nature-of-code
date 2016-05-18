function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.fillColor = color(random(360), 100, 60);
  this.applyForce = function(force) {
    var f = force.copy();
    this.acc.add(f.div(this.mass));
  }
  
  this.edges = function() {
    if(this.pos.y > height) {
      this.vel.y *= -0.9;
      this.pos.y = height;
    }
    if(this.pos.y < 0) {
      this.vel.y *= -0.9;
      this.pos.y = 0;
    }
    if(this.pos.x < 0) {
      this.vel.x *= -0.9;
      this.pos.x = 0;
    }
    if(this.pos.x > width) {
      this.vel.x *= -0.9;
      this.pos.x = width;
    }
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.slowDown();
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    // this.edges();
  }
  this.slowDown = function() {
    this.vel.mult(0.995);
  }
  this.display = function() {
    noStroke();
    blendMode(MULTIPLY);
    fill(this.fillColor);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  }
}