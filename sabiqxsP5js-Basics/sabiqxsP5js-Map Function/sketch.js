var r = 0;
var b = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    //background
    //variable, min from, max from, to min, to max
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 0, 255);
    background(r, 0, b);

    //ellipse
    fill(r, 50, 0);
    ellipse(mouseX, 200, 100, 100);

}