var squares = [];

function setup() {
  createCanvas(800, 600);
  background(color(20, 50, 220));
  noFill()
  stroke(color(255, 100, 0));
  
  frameRate(1);
  
}

function draw() {
  background(color(20, 50, 220));
  for(var i = 0; i < 20; i ++) {
    var x, y;
    if (i === 0) {
      x = 400;
      y = 300;
    }
    else {
      x = squares[i - 1].endPoint.x;
      y = squares[i - 1].endPoint.y;
    }
    squares.push(new Square(x, y, random(-60, 60), random(-60 ,60)));
  }
  squares.map(function(s) {
    s.render()
  })
  squares = [];
  // rect(100, 100, 100, 100)
}

function Square(x, y, w, h) {
  this.startPoint = createVector(x, y);
  this.size = createVector(w, h);
  this.endPoint = createVector(x+w, y+h);
  
  this.render = function() {
    rect(this.startPoint.x, this.startPoint.y, this.size.x, this.size.y);
  }
}