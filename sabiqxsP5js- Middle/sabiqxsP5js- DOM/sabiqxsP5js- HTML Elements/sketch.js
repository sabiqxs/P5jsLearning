function setup() {
createCanvas(300, 300);
createElement('h1', 'My favorite numbers below');
}

function mousePressed() {
    createP("my favorite number is " + random(0, 10));
}
function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}