var particle1, particle2;
function setup() {
  createCanvas(800, 600);
  particle1 = new Particle(200, 0, 5);
  particle2 = new Particle(400, 0, 1);
}

function draw() {
  background(51);
  noStroke();
  
  var gravity1 = createVector(0, 0.3*particle1.mass);
  var gravity2 = createVector(0, 0.3*particle2.mass);
  
  
  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);

  var wind = createVector(0.5, 0);
  
  particle1.applyForce(wind);
  particle2.applyForce(wind);
  
  particle1.update();
  particle1.edges();
  particle1.display();
  
  particle2.update();
  particle2.edges();
  particle2.display();
}