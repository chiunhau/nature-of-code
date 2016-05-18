function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  
  this.applyForce = function(force) {
    var f = force.copy();
    this.acc.add(f.div(this.mass));
  }
  
  this.edges = function() {
    if(this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.edges();
  }
  this.display = function() {
    noStroke();
    fill('rgba(255, 255, 255, 0.7)');
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  }
}