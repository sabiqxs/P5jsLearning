var canvas;
var h1;
var x = 100;
var y = 100;
function setup() {
    canvas = createCanvas(200, 200);
    canvas.position(400, 300);
    h1 = createElement('h1', 'Waiting');
    // h1.position(400, 600);
}

function mousePressed() {
    h1.html("Now i will show you");
    createP("my favorite number is " + random(0, 10));
}
function draw() {
    // clear();
  background(200);
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  h1.position(x, y);
  x = x + random(-5, 5)
}