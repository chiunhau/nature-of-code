var particles = [];

function setup() {
  createCanvas(800, 600);
  
}
function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY, random(1,3)));
}
function draw() {
  background(51);
  particles.map(function(p) {
    var gravity = createVector(0, 0.1);
    p.applyForce(gravity);
    p.update();
    p.display();
  })
}