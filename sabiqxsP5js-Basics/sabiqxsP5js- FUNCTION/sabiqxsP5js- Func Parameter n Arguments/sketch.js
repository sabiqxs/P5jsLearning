var ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
};

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    lollipop(100, 100, 100);
    lollipop(200, 200, 150);
}

function lollipop(x, y, diameter){
    fill(0, 200, 255);
    rect(x-10, y, 20, 150);

    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);

}
