function Attractor(x, y, m) {
  this.pos = createVector(x, y);
  this.mass = m;
  this.G = 1;
  
  this.calcAttraction = function(p) {
    var force = p5.Vector.sub(this.pos, p.pos);
    var distance = force.mag();
    distance = constrain(distance, 5, 20);
    force.normalize();
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    force.mult(strength);
    
    return force;
  }
  
  this.display = function() {
    fill(color('red'));
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}