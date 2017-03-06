var circleX = 0;
function setup() {
  createCanvas(400, 400);

}

function draw() {
    background(250, 250, 100);
    //elipse
    fill(250, 200, 200);
    ellipse(circleX, 200, 80, 80);

    //rect
    fill(255, 0, 0);
    rect(100, 100, 80, 80);

    circleX = circleX + 3;
}