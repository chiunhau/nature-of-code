var slider1, slider2;

function setup() {
  createCanvas(800, 600);
  background(51);
  frameRate(1);
  
  slider1 = createSlider(0, 100,0);
  slider2 = createSlider(0, 100,0);
  slider1.position(10, 10);
  slider2.position(10, 50);
  
  noStroke();
  fill('#fff');
  
}

function draw() {
  background(51);
  for(var i = 0; i < 100; i ++) {
    var rand = randomGaussian(slider1.value(), slider2.value());
    rect(i * 8, 300, 8, rand);
  }
}