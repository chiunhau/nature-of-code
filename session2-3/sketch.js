var particles = [];
var attractor;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSL);
  attractor = new Attractor(mouseX, mouseY, 40);
}
function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY, random(1,5)));
}
function mousePressed() {
  particles.push(new Particle(mouseX, mouseY, random(1,5)));
}
function draw() {
  blendMode(NORMAL);
  background(255);
  attractor.pos.set(mouseX, mouseY);
  particles.map(function(p) {
    // var gravity = createVector(0, 0.1);
    var force = attractor.calcAttraction(p);
    p.applyForce(force);
    p.update();
    p.display();
  })
}